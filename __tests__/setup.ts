import {beforeAll, afterAll, beforeEach, vi} from 'vitest';

global.testEnvironment = {};

beforeAll(() => {
  global.testEnvironment.database = { connected: true };
  vi.mock('axios');
  console.log('Global test environment setup');
});

beforeEach(() => {
  console.log('Before each test');
})

afterAll(() => {
  delete global.testEnvironment;
  console.log('Global test environment teardown');
});