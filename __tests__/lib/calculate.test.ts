// tests/calculate.test.js
import { describe, it, expect } from 'vitest';
import { calculate } from '@/lib/calculate';

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    expect(calculate(2, 3, 'add')).toBe(5);
    expect(calculate(-1, 1, 'add')).toBe(0);
  });

  it('should subtract two numbers correctly', () => {
    expect(calculate(5, 2, 'subtract')).toBe(3);
    expect(calculate(0, 5, 'subtract')).toBe(-5);
  });

  it('should multiply two numbers correctly', () => {
    expect(calculate(3, 4, 'multiply')).toBe(12);
    expect(calculate(-2, 3, 'multiply')).toBe(-6);
  });

  it('should divide two numbers correctly', () => {
    expect(calculate(10, 2, 'divide')).toBe(5);
    expect(calculate(0, 1, 'divide')).toBe(0);
  });

  it('should throw an error for division by zero', () => {
    expect(() => calculate(5, 0, 'divide')).toThrow('Cannot divide by zero');
  });

  it('should throw an error for invalid operations', () => {
    expect(() => calculate(1, 2, 'modulus')).toThrow('Invalid operation');
    expect(() => calculate(1, 2, '')).toThrow('Invalid operation');
  });
});
