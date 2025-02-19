// Comparator for columns with numbers
export const compareNumbers = (
  numberA: number | null | undefined,
  numberB: number | null | undefined,
): number => {
  // Handle null or undefined values
  const validNumberA = numberA ?? 0;
  const validNumberB = numberB ?? 0;
  return validNumberA - validNumberB;
};
