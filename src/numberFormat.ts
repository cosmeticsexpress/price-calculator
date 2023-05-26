export const formatCurrency = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'ILS',
}).format;
