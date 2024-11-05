import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach
} from 'vitest';

// Global variable
let testEnvironment;

describe('Test Suite with Setup and Teardown', () => {
  beforeAll(() => {
    // Setup code that runs once before all tests
    testEnvironment = {
      database: {connected: true},
      server: {isRunning: true},
    };
    console.log('Global setup completed');
  });

  afterAll(() => {
    // Teardown code that runs once after all tests
    testEnvironment = null; // Clear global variable
    console.log('Global teardown completed');
  });

  beforeEach(() => {
    // Code that runs before each test
    console.log('Setting up before each test');
  });

  afterEach(() => {
    // Code that runs after each test
    console.log('Cleaning up after each test');
  });

  it('should access global setup variables', () => {
    expect(testEnvironment.database.connected).toBe(true);
    expect(testEnvironment.server.isRunning).toBe(true);
  });

  it('should still access global variables after multiple tests', () => {
    expect(testEnvironment).not.toBeNull();
    expect(testEnvironment.server.isRunning).toBe(true);
  });
});