import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumberInput } from './NumberInput';

// type="number" в jsdom не пропускает буквы через fireEvent.change —
// для кейсов "не число" используем input без type=number-фильтрации значений:
// нативный <input type="number"> при невалидном вводе отдаёт пустую строку,
// поэтому NaN-сценарий моделируем значением '-' (тоже невалидное число).

const input = () => document.querySelector('input') as HTMLInputElement;

describe('NumberInput', () => {
  let onChange: ReturnType<typeof vi.fn>;
  beforeEach(() => {
    onChange = vi.fn();
  });

  it('рендер с value → input показывает value', () => {
    render(<NumberInput value={12.5} onChange={onChange} />);
    expect(input().value).toBe('12.5');
  });

  it('округляет начальное значение до precision', () => {
    render(<NumberInput value={1.23456} precision={3} onChange={onChange} />);
    expect(input().value).toBe('1.235');
  });

  it('ввод текста меняет draft, но onChange НЕ вызывается', () => {
    render(<NumberInput value={0} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '7' } });
    expect(input().value).toBe('7');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Enter → onChange вызван с новым значением', () => {
    render(<NumberInput value={0} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '7' } });
    fireEvent.keyDown(input(), { key: 'Enter' });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(7);
  });

  it('blur → onChange вызван', () => {
    render(<NumberInput value={0} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '9' } });
    fireEvent.blur(input());
    expect(onChange).toHaveBeenCalledWith(9);
  });

  it('Escape → откат к исходному value, onChange НЕ вызван', () => {
    render(<NumberInput value={3} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '99' } });
    fireEvent.keyDown(input(), { key: 'Escape' });
    expect(input().value).toBe('3');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('пусто → красная рамка (data-status=error), onChange не вызван', () => {
    render(<NumberInput value={5} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '' } });
    expect(input().dataset.status).toBe('error');
    fireEvent.blur(input());
    expect(onChange).not.toHaveBeenCalled();
    expect(input().dataset.status).toBe('error');
  });

  it('невалидное значение ("-" = NaN) → error, onChange не вызван', () => {
    render(<NumberInput value={5} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '-' } });
    expect(input().dataset.status).toBe('error');
    fireEvent.blur(input());
    expect(onChange).not.toHaveBeenCalled();
  });

  it('значения вне [min, max] клампятся при коммите', () => {
    render(<NumberInput value={0} min={-100} max={10} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '42' } });
    fireEvent.blur(input());
    expect(onChange).toHaveBeenCalledWith(10);

    onChange.mockClear();
    fireEvent.change(input(), { target: { value: '-500' } });
    fireEvent.blur(input());
    expect(onChange).toHaveBeenCalledWith(-100);
  });

  it('округление до precision при коммите (1.23456 → 1.235)', () => {
    render(<NumberInput value={0} precision={3} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '1.23456' } });
    fireEvent.keyDown(input(), { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(1.235);
  });

  it('жёлтая рамка (dirty) после валидного ввода до коммита', () => {
    render(<NumberInput value={0} onChange={onChange} />);
    fireEvent.change(input(), { target: { value: '4' } });
    expect(input().dataset.status).toBe('dirty');
  });

  it('disabled → input disabled, ввод не приводит к onChange', () => {
    render(<NumberInput value={1} onChange={onChange} disabled />);
    expect(input().disabled).toBe(true);
    // fireEvent меняет DOM value в обход React (input заблокирован для пользователя);
    // проверяем, что компонент пробрасывает disabled и не «чинит» его своим состоянием
    fireEvent.blur(input());
    expect(onChange).not.toHaveBeenCalled();
    expect(input().disabled).toBe(true);
  });

  it('unit отображается рядом', () => {
    render(<NumberInput value={1} onChange={onChange} unit="mm" />);
    expect(screen.getByText('mm')).toBeTruthy();
  });

  it('label → aria-label на input', () => {
    render(<NumberInput value={1} onChange={onChange} label="X (mm)" />);
    expect(screen.getByLabelText('X (mm)')).toBeTruthy();
  });

  it('внешнее изменение value синхронизирует draft (не dirty)', () => {
    const { rerender } = render(<NumberInput value={1} onChange={onChange} />);
    rerender(<NumberInput value={2} onChange={onChange} />);
    expect(input().value).toBe('2');
  });

  it('стрелки (step) нативны: type=number и step проброшены', () => {
    render(<NumberInput value={1} onChange={onChange} step={0.5} />);
    expect(input().type).toBe('number');
    expect(input().step).toBe('0.5');
  });
});
