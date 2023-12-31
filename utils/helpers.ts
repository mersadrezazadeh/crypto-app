export function formatCurrency(number: number) {
  const formattedCurrency = number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });

  return formattedCurrency;
}
