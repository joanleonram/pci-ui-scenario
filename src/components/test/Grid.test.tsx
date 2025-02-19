import React from "react";
import { AgGridReact } from "ag-grid-react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NeoGrid from "../Grid";

test("renders correct number of columns", () => {
  const gridRef = React.createRef<AgGridReact>();
  render(<NeoGrid gridRef={gridRef} />);

  // Check if the correct number of columns are rendered
  const columnHeaders = screen.getAllByRole("columnheader");
  expect(columnHeaders.length).toBe(10); // Adjust the number based on your columnDefs
});

test("renders column headers with correct text", () => {
  const gridRef = React.createRef<AgGridReact>();
  render(<NeoGrid gridRef={gridRef} />);

  // Check if the column headers contain the expected text
  const expectedHeaders = [
    "Designation",
    "Discovery Date",
    "H (mag)",
    "MOID (au)",
    "q (au)",
    "Q (au)",
    "Period (yr)",
    "Inclination (deg)",
    "Potentially Hazardous",
    "Orbit Class",
  ];

  expectedHeaders.forEach((header) => {
    expect(screen.getByText(header)).toBeInTheDocument();
  });
});