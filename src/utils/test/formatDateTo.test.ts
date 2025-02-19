import { formatDateTo } from "../formatDateTo";
import { ValueFormatterParams } from "ag-grid-community";

describe("formatDateTo", () => {
  test("should format date from yyyy-mm-dd to dd/mm/yyyy", () => {
    const params: ValueFormatterParams = {
      value: "2025-02-18",
      node: null,
      data: undefined,
      column: undefined,
      colDef: undefined,
      api: undefined,
      context: undefined,
    };
    expect(formatDateTo(params)).toBe("18/02/2025");
  });

  test("should handle date strings with time component", () => {
    const params: ValueFormatterParams = {
      value: "2025-02-18T12:34:56",
      node: null,
      data: undefined,
      column: undefined,
      colDef: undefined,
      api: undefined,
      context: undefined,
    };
    expect(formatDateTo(params)).toBe("18/02/2025");
  });
});
