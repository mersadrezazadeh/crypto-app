import Header from "../components/header/Header";
import CoinStatsLayout from "@/components/coin-stats/CoinStatsLayout";
import CoinsTable from "@/components/coins-table/CoinsTable";
import { setCurrency, setSelectedCoin } from "@/contexts/ServerContext";

type HomePageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const currency = searchParams["currency"] ?? "usd";

  setCurrency(searchParams["currency"]?.toString() ?? "usd");
  setSelectedCoin(searchParams["selected_coin"]?.toString() ?? "bitcoin");

  // const selected_coin = searchParams["selected_coin"] ?? "bitcoin";

  const time = searchParams["time"] ?? "1";

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-6 px-3 py-6">
        <CoinStatsLayout />

        <CoinsTable
          currency={currency.toString()}
          page={+page}
          per_page={+per_page}
          start={start}
          end={end}
        />
      </main>
    </>
  );
}
