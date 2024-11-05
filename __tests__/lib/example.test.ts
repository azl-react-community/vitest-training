import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
  it('should have access to the global test environment', () => {
    expect(global.testEnvironment.database.connected).toBe(true);
  });
});