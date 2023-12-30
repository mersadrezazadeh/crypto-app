import { getCoins } from "@/services/apiCoins";
import CoinRow, { type Coin } from "./CoinRow";

async function CoinsTable() {
  const coins = await getCoins();

  return (
    <div
      role="table"
      className="rounded-lg border border-gray-200 bg-gray-0 text-sm dark:border-gray-700 dark:bg-gray-850"
    >
      <div
        role="row"
        className="grid grid-cols-9 items-center gap-2 rounded-t-lg border-b border-gray-100 bg-gray-50 px-3 py-4 font-semibold text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
      >
        <div>#</div>
        <div>Name</div>
        <div>Price</div>
        <div>1h%</div>
        <div>24h%</div>
        <div>7d%</div>
        <div>24h volume/Market Cap</div>
        <div>Circulating/Total supply</div>
        <div>Last 7d</div>
      </div>

      {coins.length === 0 ? (
        <p className="m-6 text-center text-base">No data found.</p>
      ) : (
        <section className="my-1">
          {coins.map((coin: Coin, index: number) => (
            <CoinRow coin={coin} key={coin.id} number={index + 1} />
          ))}
        </section>
      )}

      <footer className="flex justify-center rounded-b-lg bg-gray-50 p-3 dark:bg-gray-900"></footer>
    </div>
  );
}

export default CoinsTable;
