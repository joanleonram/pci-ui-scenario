// Comparator for columns with dates
export function compareDates(
  dateString1: string | null | undefined,
  dateString2: string | null | undefined): number {
  const dateNumber1 = convertDateToComparableNumber(dateString1);
  const dateNumber2 = convertDateToComparableNumber(dateString2);

  if (dateNumber1 === null && dateNumber2 === null) {
    return 0;
  }
  if (dateNumber1 === null) {
    return -1;
  }
  if (dateNumber2 === null) {
    return 1;
  }
  return dateNumber1 - dateNumber2;
}

// Convert date string to comparable number (e.g., 18/02/2025 -> 20250218)
function convertDateToComparableNumber(
  dateString: string | null | undefined
): number | null {
  if (!dateString) return null;

  const formattedDate = dateString.split("T")[0];
  const [year, month, day] = formattedDate.split("-").map(Number);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return null;
  }

  return year * 10000 + month * 100 + day;
}
