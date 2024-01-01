import CoinsTable from "@/components/coins-table/CoinsTable";
import Header from "../components/header/Header";
import CoinsSliderLayout from "@/components/coins-slider/CoinsSliderLayout";

type HomePageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const currency = searchParams["currency"] ?? "usd";
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <main className="container py-6 px-3 flex flex-col gap-6">
        <CoinsSliderLayout currency={currency.toString()} />

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
