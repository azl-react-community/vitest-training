import { describe, it, expect } from 'vitest';

describe('Array subset check', () => {
  it('should contain the subset [2, 3]', () => {
    const numbers = [1, 2, 3, 5, 8];

    expect(numbers).toEqual(expect.arrayContaining([2, 3])); // Checks for the subset [2, 3]
  });
});

describe('Object key check', () => {
  it('should contain the key "name"', () => {
    const user = { name: 'Alice', age: 25 };

    expect(user).toHaveProperty('name'); // Passes if "name" key exists in the object
  });
});

import { describe, it, expect } from 'vitest';

describe('Object key-value check', () => {
  it('should contain the key "name" with the value "Alice"', () => {
    const user = { name: 'Alice', age: 25 };

    expect(user).toHaveProperty('name', 'Alice'); // Passes if "name" key has the value "Alice"
  });
});