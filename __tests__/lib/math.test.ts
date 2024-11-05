import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { add, subtract } from "@/lib/math";

// Optional setup variables or mock data
let a: number, b: number;

describe("Math Functions", () => {
  // Setup and teardown for each test case
  beforeEach(() => {
    a = 5;
    b = 3;
  });

  afterEach(() => {
    // Clear variables or mocks if necessary (optional here)
    a = 0;
    b = 0;
  });

  // Test case for addition
  it("adds two numbers correctly", () => {
    const result = add(a, b);
    expect(result).toBe(8);
  });

  // Test case for subtraction
  it("subtracts two numbers correctly", () => {
    const result = subtract(a, b);
    expect(result).toBe(2);
  });

  // Additional tests as needed...
});
