import { getAllCoins, getTableCoins } from "@/utils/actions";
import CoinRow, { type Coin } from "./CoinRow";
import PaginationControl from "./PaginationControl";
import { getCurrency, getPage, getPerPage } from "@/contexts/ServerContext";

async function CoinsTable() {
  const currency = getCurrency();
  const page = +getPage();
  const perPage = +getPerPage();

  const allCoins = await getAllCoins();
  const coins = await getTableCoins(currency, page, perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (!allCoins || !coins) return <p>Loading...</p>;

  return (
    <div
      role="table"
      className="rounded-lg border border-gray-200 bg-gray-0 text-sm dark:border-gray-700 dark:bg-gray-850"
    >
      <div
        role="row"
        className="flex items-center gap-2 rounded-t-lg border-b border-gray-100 bg-gray-50 px-3 py-4 text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
      >
        <div className="w-[3%] text-center">#</div>
        <div className="w-[4%]"></div>
        <div className="w-[13%] text-center">Name</div>
        <div className="w-[7%] text-center">Price</div>
        <div className="w-[7%] text-center">24h%</div>
        <div className="w-[7%] text-center">1h%</div>
        <div className="w-[7%] text-center">7d%</div>
        <div className="w-[18] text-center">24h volume/Market Cap</div>
        <div className="w-[18%] text-center">Circulating/Total supply</div>
        <div className="w-[14%] text-center">Last 7d</div>
      </div>

      {coins.length === 0 ? (
        <p className="m-6 text-center text-base">No data found.</p>
      ) : (
        <section className="my-1">
          {coins.map((coin: Coin) => (
            <CoinRow coin={coin} currency={currency} key={coin.id} />
          ))}
        </section>
      )}

      <footer className="flex justify-center rounded-b-lg bg-gray-50 p-3 dark:bg-gray-900">
        <PaginationControl
          hasNextPage={end < allCoins?.length}
          hasPrevPage={start > 0}
          maxPage={Math.ceil(allCoins?.length / perPage)}
        />
      </footer>
    </div>
  );
}

export default CoinsTable;
