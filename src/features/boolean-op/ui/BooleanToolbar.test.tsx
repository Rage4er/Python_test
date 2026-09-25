// Тесты BooleanToolbar: UI-обвязка над executeBooleanOp (Web Worker / CSG).
// Мокаем сам модуль '@features/boolean-op/model/executeBooleanOp' — компонент
// импортирует его динамически (await import(...)), vi.mock перехватывает и
// динамические импорты по тому же алиасу.
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup, act, waitFor } from '@testing-library/react';
import { useAppStore } from '@app/store';
import {
  BooleanToolbar,
} from './BooleanToolbar';
import * as booleanOpModule from '@features/boolean-op/model/executeBooleanOp';

vi.mock('@features/boolean-op/model/executeBooleanOp', () => ({
  executeBooleanOp: vi.fn(),
  setEngineAdapter: vi.fn(),
  getEngineAdapter: vi.fn(() => null),
}));

const mockedExecute = vi.mocked(booleanOpModule.executeBooleanOp);

async function clickAndWait(button: HTMLElement) {
  // клик запускает async run(): busy=true → await import → executeBooleanOp
  // → finally busy=false. waitFor внутри fireEvent-хелперов не используем —
  // явно прокручиваем микротask-очередь под act().
  fireEvent.click(button);
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
  });
}

describe('BooleanToolbar', () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
    useAppStore.setState({ selection: [] });
    mockedExecute.mockResolvedValue({ status: 'applied' });
  });

  it('рендер: три кнопки Union / Subtract / Intersect присутствуют', () => {
    render(<BooleanToolbar />);
    expect(screen.getByText(/Union/)).toBeTruthy();
    expect(screen.getByText(/Subtract/)).toBeTruthy();
    expect(screen.getByText(/Intersect/)).toBeTruthy();
  });

  it('кнопки disabled при пустом selection (< 2 объектов)', () => {
    render(<BooleanToolbar />);
    for (const name of [/Union/, /Subtract/, /Intersect/]) {
      const btn = screen.getByText(name).closest('button');
      expect(btn?.disabled).toBe(true);
    }
  });

  it('кнопки активны при selection.length >= 2', () => {
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    for (const name of [/Union/, /Subtract/, /Intersect/]) {
      const btn = screen.getByText(name).closest('button');
      expect(btn?.disabled).toBe(false);
    }
  });

  it('клик Union → executeBooleanOp("union", selection)', async () => {
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Union/));
    expect(mockedExecute).toHaveBeenCalledTimes(1);
    expect(mockedExecute).toHaveBeenCalledWith('union', ['a', 'b']);
  });

  it('клик Subtract → executeBooleanOp("subtract", selection)', async () => {
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Subtract/));
    expect(mockedExecute).toHaveBeenCalledWith('subtract', ['a', 'b']);
  });

  it('клик Intersect → executeBooleanOp("intersect", selection)', async () => {
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Intersect/));
    expect(mockedExecute).toHaveBeenCalledWith('intersect', ['a', 'b']);
  });

  it('status=error → показывается текст ошибки', async () => {
    mockedExecute.mockResolvedValueOnce({ status: 'error', reason: 'CSG boom' });
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Union/));
    expect(screen.getByText('CSG boom')).toBeTruthy();
  });

  it('status=stale → показывается инфо-сообщение', async () => {
    mockedExecute.mockResolvedValueOnce({ status: 'stale' });
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Union/));
    expect(screen.getByText(/Сцена изменилась/)).toBeTruthy();
  });

  it('исключение из executeBooleanOp → error с message', async () => {
    mockedExecute.mockRejectedValueOnce(new Error('worker died'));
    useAppStore.setState({ selection: ['a', 'b'] });
    render(<BooleanToolbar />);
    await clickAndWait(screen.getByText(/Union/));
    expect(screen.getByText('worker died')).toBeTruthy();
  });

  it('во время выполнения (busy) кнопки disabled, оверлей виден; после — снова активны', async () => {
    useAppStore.setState({ selection: ['a', 'b'] });
    let resolveOp: (v: { status: 'applied' }) => void = () => {};
    mockedExecute.mockImplementationOnce(
      () => new Promise((res) => { resolveOp = res; })
    );
    // Развязываем клики: сначала даём динамическому import() завершиться
    // (после этого executeBooleanOp будет вызван с нашим mockImplementationOnce),
    // затем разворачиваем промис и ждём finally → setBusy(false).
    render(<BooleanToolbar />);
    fireEvent.click(screen.getByText(/Union/));
    await act(async () => {
      /* drain микротасок: dynamic import + вызов executeBooleanOp */
    });
    // busy=true → overlay + disabled
    expect(screen.getByText(/Вычисление/)).toBeTruthy();
    expect(screen.getByText(/Subtract/).closest('button')?.disabled).toBe(true);
    resolveOp({ status: 'applied' });
    await waitFor(() =>
      expect(screen.queryByText(/Вычисление/)).toBeNull()
    );
    expect(screen.getByText(/Subtract/).closest('button')?.disabled).toBe(false);
  });
});
