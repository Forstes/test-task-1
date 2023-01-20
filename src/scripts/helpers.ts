export function formatCurrency(product: any): string {
  return product.regular_price.currency == "USD"
    ? `$${product.regular_price.value}`
    : `${product.regular_price.value} ${product.regular_price.currency}`;
}
