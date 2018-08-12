interface ICurrency {
  id: string;
  name: string;
  min_size: string;
}
export type Currencies = ICurrency[];

export async function getCurrencies(): Promise<Currencies> {
  const currencies = await fetch("https://api.coinbase.com/v2/currencies");
  const json = await currencies.json();

  return json.data;
}
