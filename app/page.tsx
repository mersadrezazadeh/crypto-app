import Header from "../components/header/Header";
import CoinStatsLayout from "@/components/coin-stats/CoinStatsLayout";
import CoinsTable from "@/components/coins-table/CoinsTable";
import {
  setCurrency,
  setPage,
  setPerPage,
  setSelectedCoin,
} from "@/contexts/ServerContext";

type HomePageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function HomePage({ searchParams }: HomePageProps) {
  setCurrency(searchParams["currency"]?.toString() ?? "usd");
  setSelectedCoin(searchParams["selected_coin"]?.toString() ?? "bitcoin");
  setPage(searchParams["page"]?.toString() ?? "1");
  setPerPage(searchParams["per_page"]?.toString() ?? "100");

  // const time = searchParams["time"] ?? "1";

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-6 px-3 py-6">
        <CoinStatsLayout />
        <CoinsTable />
      </main>
    </>
  );
}
