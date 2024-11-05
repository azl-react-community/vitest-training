import { describe, it, expect, beforeEach } from 'vitest';
import { registerUser, users } from '@/lib/user';

describe('User Registration', () => {
  beforeEach(() => {
    // Clear users before each test to ensure isolation
    users.length = 0; // Reset the users array
  });

  /// HAPPY PATH
  it('should register a new user successfully', () => {
    const name = 'John Doe';
    const email = 'john@example.com';

    const result = registerUser(name, email);

    // Assertions to verify the outcome
    expect(result).toEqual({ name, email }); // Check that the returned user object is correct
    expect(users).toHaveLength(1); // Verify that one user has been added
    expect(users[0]).toEqual(result); // Ensure the registered user matches the result
  });

  /// UNHAPPY PATH
  it('should throw an error when registering with an already registered email', () => {
    const name = 'Jane Doe';
    const email = 'jane@example.com';

    // First, register the user with the email
    registerUser(name, email);

    // Now try to register the same email again
    const duplicateEmail = 'jane@example.com';

    // Use expect().toThrow() to assert that an error is thrown
    expect(() => registerUser('Another User', duplicateEmail)).toThrow('Email already registered');
  });
});