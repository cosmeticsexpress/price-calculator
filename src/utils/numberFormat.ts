export const formatCurrency = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
  style: 'currency',
  currency: 'ILS',
}).format;

export const formatNumber = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
}).format;
