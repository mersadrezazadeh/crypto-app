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
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";
  const selected_coin_1 = searchParams["selected_coin_1"] ?? "bitcoin";
  const selected_coin_2 = searchParams["selected_coin_2"] ?? "";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <main className="container flex flex-col gap-6 px-3 py-6">
        <CoinsCarouselLayout
          currency={currency.toString()}
          selectedCoin1={selected_coin_1.toString()}
          selectedCoin2={selected_coin_2.toString()}
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
