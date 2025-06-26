// helper function to help with pound signs
export function formatPrice({ locale = "en-GB", style = "currency", currency = "GBP", decimals = 0, price }) {
  return new Intl.NumberFormat(locale, { style, currency, maximumFractionDigits: decimals }).format(price);
}
