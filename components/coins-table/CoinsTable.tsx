import { getAllCoins, getTableCoins } from "@/services/apiCoins";
import CoinRow, { type Coin } from "./CoinRow";
import PaginationControl from "./PaginationControl";

async function CoinsTable({
  page,
  per_page,
  start,
  end,
}: {
  page: number;
  per_page: number;
  start: number;
  end: number;
}) {
  const allCoins = await getAllCoins();
  const coins = await getTableCoins(page, per_page);

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
          {coins.map((coin: Coin) => (
            <CoinRow coin={coin} key={coin.id} />
          ))}
        </section>
      )}

      <footer className="flex justify-center rounded-b-lg bg-gray-50 p-3 dark:bg-gray-900">
        <PaginationControl
          hasNextPage={end < allCoins?.length}
          hasPrevPage={start > 0}
          maxPage={Math.ceil(allCoins?.length / per_page)}
        />
      </footer>
    </div>
  );
}

export default CoinsTable;
