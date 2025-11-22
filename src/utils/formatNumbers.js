export function formatNumber(num) {
  if (num === null || num === undefined) return "-";
  if (num < 1000) return num.toString();
  return (num / 1000).toFixed(1) + "K";
}

export function formatCurrencyINR(num) {
  if (num === null || num === undefined) return "-";
  if (num < 1000) return `₹${num}`;
  return `₹${(num / 1000).toFixed(1)}K`;
}
