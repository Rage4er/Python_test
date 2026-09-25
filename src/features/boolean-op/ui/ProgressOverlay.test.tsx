// ProgressOverlay принимает только { visible: boolean } — текста с процентом
// прогресса в компоненте нет, поэтому проверяем ветки visible / !visible.
import { render, screen } from '@testing-library/react';
import { ProgressOverlay } from './ProgressOverlay';

describe('ProgressOverlay', () => {
  it('visible=false → ничего не рендерится', () => {
    const { container } = render(<ProgressOverlay visible={false} />);
    expect(container.firstChild).toBeNull();
    expect(screen.queryByText(/Вычисление/)).toBeNull();
  });

  it('visible=true → показывает оверлей «Вычисление…» со спиннером', () => {
    const { container } = render(<ProgressOverlay visible={true} />);
    expect(screen.getByText(/Вычисление/)).toBeTruthy();
    // контейнер-оверлей поверх всей сцены
    const overlay = container.querySelector('div.absolute.inset-0');
    expect(overlay).toBeTruthy();
    // спиннер (animate-spin) внутри плашки
    expect(container.querySelector('.animate-spin')).toBeTruthy();
  });
});
