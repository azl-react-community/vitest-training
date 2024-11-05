// tests/lib/jsonUtils.test.js
import {describe, it, expect} from 'vitest';
import {hasKey} from '@/lib/jsonUtils';

describe('hasKey', () => {
  it('should return true if the key exists in the object', () => {
    const obj = {
      name: 'Alice',
      age: 25,
      city: 'Wonderland'
    };
    expect(hasKey(obj, 'name')).toBe(true);
    expect(hasKey(obj, 'age')).toBe(true);
    expect(hasKey(obj, 'city')).toBe(true);
  });

  it('should return false if the key does not exist in the object', () => {
    const obj = {
      name: 'Alice',
      age: 25,
      city: 'Wonderland'
    };
    expect(hasKey(obj, 'country')).toBe(false);
    expect(hasKey(obj, 'hobby')).toBe(false);
  });

  it('should return false for an empty object', () => {
    const obj = {};
    expect(hasKey(obj, 'name')).toBe(false);
  });

  it('should return false for undefined or null key', () => {
    const obj = {name: 'Alice'};
    expect(hasKey(obj, undefined)).toBe(false);
    expect(hasKey(obj, null)).toBe(false);
  });

  it('should return true for nested objects when the key is present', () => {
    const obj = {
      user: {name: 'Alice', age: 25},
      city: 'Wonderland'
    };
    expect(hasKey(obj.user, 'name')).toBe(true);
    expect(hasKey(obj.user, 'age')).toBe(true);
  });

  it('should return false for nested objects when the key is not present', () => {
    const obj = {
      user: {name: 'Alice', age: 25},
      city: 'Wonderland'
    };
    expect(hasKey(obj.user, 'city')).toBe(false);
  });
});