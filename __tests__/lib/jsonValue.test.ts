import {describe, it, expect} from 'vitest';
import {doesKeyHoldValue} from '@/lib/jsonUtils';

describe('doesKeyHoldValue', () => {
  it('should return true if the key exists and holds the specific value', () => {
    const obj = {
      name: 'Alice',
      age: 25,
      city: 'Wonderland'
    };
    expect(doesKeyHoldValue(obj, 'name', 'Alice')).toBe(true);
    expect(doesKeyHoldValue(obj, 'age', 25)).toBe(true);
    expect(doesKeyHoldValue(obj, 'city', 'Wonderland')).toBe(true);
  });

  it('should return false if the key exists but does not hold the specific value', () => {
    const obj = {
      name: 'Alice',
      age: 25,
      city: 'Wonderland'
    };
    expect(doesKeyHoldValue(obj, 'name', 'Bob')).toBe(false);
    expect(doesKeyHoldValue(obj, 'age', 30)).toBe(false);
    expect(doesKeyHoldValue(obj, 'city', 'Oz')).toBe(false);
  });

  it('should return false if the key does not exist in the object', () => {
    const obj = {
      name: 'Alice',
      age: 25,
      city: 'Wonderland'
    };
    expect(doesKeyHoldValue(obj, 'country', 'USA')).toBe(false);
    expect(doesKeyHoldValue(obj, 'hobby', 'reading')).toBe(false);
  });

  it('should return false for an empty object', () => {
    const obj = {};
    expect(doesKeyHoldValue(obj, 'name', 'Alice')).toBe(false);
  });

  it('should return false for undefined or null values', () => {
    const obj = {name: 'Alice', age: 25};
    expect(doesKeyHoldValue(obj, 'name', undefined)).toBe(false);
    expect(doesKeyHoldValue(obj, 'age', null)).toBe(false);
  });

  it('should handle different data types correctly', () => {
    const obj = {id: 1, name: 'Alice', isActive: true};
    expect(doesKeyHoldValue(obj, 'id', 1)).toBe(true); // number
    expect(doesKeyHoldValue(obj, 'name', 'Alice')).toBe(true); // string
    expect(doesKeyHoldValue(obj, 'isActive', true)).toBe(true); // boolean
    expect(doesKeyHoldValue(obj, 'isActive', false)).toBe(false); // different boolean value
  });
});