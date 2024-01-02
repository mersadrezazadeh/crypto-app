import Header from "../components/header/Header";
import CoinsCarouselLayout from "@/components/coins-carousel/CoinsCarouselLayout";
import CoinsTable from "@/components/coins-table/CoinsTable";

type HomePageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const currency = searchParams["currency"] ?? "usd";

  const selected_coin = searchParams["selected_coin"] ?? "bitcoin";

  const time = searchParams["time"] ?? "1";

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-6 px-3 py-6">
        <CoinsCarouselLayout
          currency={currency.toString()}
          selectedCoin={selected_coin.toString()}
        />

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
