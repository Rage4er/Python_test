import { describe, test, expect } from 'vitest';
import { snapToValue, snapPosition } from './snapToGrid';
import { SNAP_TRANSLATION, SNAP_ROTATION_DEG, SNAP_SCALE } from '@shared/engine/EngineAdapter';

describe('snapToValue — чистая логика привязки к сетке', () => {
  test('привязывает положительные координаты к ближайшему целому (шаг 1)', () => {
    expect(snapToValue(1.2, 1)).toBe(1);
    expect(snapToValue(1.8, 1)).toBe(2);
    expect(snapToValue(0.4, 1)).toBe(0);
  });

  test('корректно обрабатывает отрицательные координаты (частый источник багов)', () => {
    expect(snapToValue(-1.2, 1)).toBe(-1);
    expect(snapToValue(-1.8, 1)).toBe(-2);
    expect(snapToValue(-0.4, 1)).toBe(0); // без -0
  });

  test('середина границы округляется последовательно (round half away from zero)', () => {
    expect(snapToValue(1.5, 1)).toBe(2);
    expect(snapToValue(-1.5, 1)).toBe(-2);
    expect(snapToValue(2.5, 1)).toBe(3);
  });

  test('уважает произвольный шаг сетки', () => {
    expect(snapToValue(2.3, 0.5)).toBe(2.5);
    expect(snapToValue(2.1, 0.5)).toBe(2);
    expect(snapToValue(7, 2.5)).toBe(7.5);
    expect(snapToValue(6.2, 2.5)).toBe(5);
  });

  test('ноль и малые смещения', () => {
    expect(snapToValue(0, 1)).toBe(0);
    expect(snapToValue(0.01, 1)).toBe(0);
    expect(snapToValue(-0.01, 1)).toBe(0);
  });

  test('неточности плавающей точки нормализуются', () => {
    // 0.1*3 = 0.30000000000000004 → после snap к 0.1 должно быть ровно 0.3
    expect(snapToValue(0.1 * 3 + 0.001, 0.1)).toBe(0.3);
  });

  test('невалидный шаг (<=0, NaN, Infinity) — no-op, возвращает значение как есть', () => {
    expect(snapToValue(1.7, 0)).toBe(1.7);
    expect(snapToValue(1.7, -1)).toBe(1.7);
    expect(snapToValue(1.7, NaN)).toBe(1.7);
    expect(snapToValue(1.7, Infinity)).toBe(1.7);
  });

  test('ннфинити/NaN значение возвращается как есть (защита от NaN-распространения)', () => {
    expect(snapToValue(NaN, 1)).toBeNaN();
    expect(snapToValue(Infinity, 1)).toBe(Infinity);
  });

  test('соответствует configured-шагам движка', () => {
    // EngineAdapter: translation snap = 1 мм
    expect(snapToValue(3.6, SNAP_TRANSLATION)).toBe(4);
    // scale snap = 0.1
    expect(snapToValue(1.24, SNAP_SCALE)).toBe(1.2);
    // rotation: 15° шаг в радианах ≈ 0.261799
    const stepRad = (SNAP_ROTATION_DEG * Math.PI) / 180;
    expect(Math.abs(snapToValue(0.3, stepRad) - stepRad)).toBeLessThan(1e-9);
  });
});

describe('snapPosition — привязка позиции [x,y,z]', () => {
  test('равномерный шаг по всем осям', () => {
    expect(snapPosition([1.7, 2.3, -0.6], 1)).toEqual([2, 2, -1]);
  });

  test('разные шаги по осям', () => {
    expect(snapPosition([2.3, 1.8, 0.7], [0.5, 1, 2.5])).toEqual([2.5, 2, 0]);
  });

  test('нулевая позиция стабильна', () => {
    expect(snapPosition([0, 0, 0], 1)).toEqual([0, 0, 0]);
  });

  test('не мутирует входной массив', () => {
    const input: [number, number, number] = [1.7, 2.3, 3.2];
    snapPosition(input, 1);
    expect(input).toEqual([1.7, 2.3, 3.2]);
  });
});

// Дата актуализации: 24 сентября 2026 г.
