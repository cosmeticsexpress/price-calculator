export const formatCurrency = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
  style: 'currency',
  currency: 'ILS',
}).format;

export const formatNumber = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
}).format;
