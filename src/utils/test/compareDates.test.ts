import { compareDates } from "../compareDates";

describe("compareDates", () => {
  test("should return 0 when both dates are null", () => {
    expect(compareDates(null, null)).toBe(0);
  });

  test("should return 0 when both dates are the same", () => {
    expect(compareDates("2025-02-18", "2025-02-18")).toBe(0);
  });
});
