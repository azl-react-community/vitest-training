import { describe, it, expect } from 'vitest';
import { containsValue } from '@/lib/arrayUtils';

describe('containsValue', () => {
  it('should return true if the value is present in the array', () => {
    expect(containsValue([1, 2, 3], 2)).toBe(true);
    expect(containsValue(['apple', 'banana', 'orange'], 'banana')).toBe(true);
    expect(containsValue([true, false], true)).toBe(true);
  });

  it('should return false if the value is not present in the array', () => {
    expect(containsValue([1, 2, 3], 4)).toBe(false);
    expect(containsValue(['apple', 'banana', 'orange'], 'grape')).toBe(false);
    expect(containsValue([true, false], null)).toBe(false);
  });

  it('should return false for an empty array', () => {
    expect(containsValue([], 1)).toBe(false);
  });

  it('should return true for NaN if present', () => {
    expect(containsValue([NaN], NaN)).toBe(true); // NaN is considered equal to itself in the context of includes
  });

  it('should handle different data types', () => {
    expect(containsValue([1, '1', true], 1)).toBe(true); // strict equality doesn't apply
    expect(containsValue([null, undefined, 0, false], false)).toBe(true);
    expect(containsValue([undefined, ''], '')).toBe(true); // check for empty string presence
  });
});