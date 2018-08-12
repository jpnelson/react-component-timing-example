export interface IPrice {
  amount: number;
  currency: string;
}

type CurrencyId = string;

export async function getPrice(currency: CurrencyId): Promise<IPrice> {
  const currencies = await fetch(
    `https://api.coinbase.com/v2/prices/spot?currency=${currency}`
  );
  const json = await currencies.json();

  return json.data;
}
