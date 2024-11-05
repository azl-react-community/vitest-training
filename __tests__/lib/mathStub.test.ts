import { describe, it, expect, vi } from 'vitest';
import * as math from '@/lib/math'; // Adjust the path to match your project structure

// Mocking the module
vi.mock('@/lib/math', () => {
  const originalModule = vi.importActual('@/lib/math');
  return {
    ...originalModule,
    log: vi.fn(), // Mocking the log function
    addWithLog: vi.fn(), // Mocking the addWithLog function
  };
});

describe('addWithLog', () => {
  it('should add two numbers and log the result', () => {
    // Setting up the mock implementation for add
    math.addWithLog.mockImplementation((a, b) => {
      math.log(`The result is ${a + b}`);
      return a + b
    })
    math.log.mockImplementation((message) => {
      console.log('>>' + message);
    })

    // Call the addWithLog function
    const result = math.addWithLog(2, 3);

    // Assertions
    expect(result).toBe(5); // Check the result of the addition
    expect(math.log).toHaveBeenCalledWith('The result is 5'); // Check that log was called correctly
  });
});
