export const { format: formatPrice } = new Intl.NumberFormat('us', {
  style: 'currency',
  currency: 'USD',
});
