export async function getCurrencies() {
  const currencies = await fetch("https://api.coinbase.com/v2/currencies");
  currencies.json();
  return currencies;
}
