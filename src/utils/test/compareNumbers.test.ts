import { compareNumbers } from "../compareNumbers";

describe("compareNumbers", () => {
  test("should return 0 when both numbers are null", () => {
    expect(compareNumbers(null, null)).toBe(0);
  });

  test("should return 0 when both numbers are undefined", () => {
    expect(compareNumbers(undefined, undefined)).toBe(0);
  });

  test("should return 0 when both numbers are 0", () => {
    expect(compareNumbers(0, 0)).toBe(0);
  });
});
