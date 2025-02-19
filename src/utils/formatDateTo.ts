import { ValueFormatterParams } from "ag-grid-community";

/*
  Formatting dates to this format: dd/mm/yyyy
*/
export function formatDateTo(params: ValueFormatterParams): string {
  if (!params.value) {
    return "";
  }

  // current date format is yyyy-mm-dd
  const dateParts = params.value.split("T")[0].split("-");

  if (dateParts.length !== 3) {
    return params.value; // Return the original value if the format is unexpected
  }

  // new date format is dd/mm/yyyy
  const [year, month, day] = dateParts;
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
