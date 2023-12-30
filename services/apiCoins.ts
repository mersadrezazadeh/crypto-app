const API_KEY = "CG-dDPMf8v1kFW8Q4DZjkScwkqi";

export async function getAllCoins() {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=${API_KEY}`,
    { next: { revalidate: 300 } }
  );

  return response.json();
}

export async function getTableCoins(page: number, per_page: number) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=${API_KEY}`,
    { next: { revalidate: 60 } }
  );

  return response.json();
}
