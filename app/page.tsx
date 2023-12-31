import CoinsTable from "@/components/coins-table/CoinsTable";
import Header from "../components/header/Header";

type HomePageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function HomePage({ searchParams }: HomePageProps) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <main className="container py-6">
        <CoinsTable page={+page} per_page={+per_page} start={start} end={end} />
      </main>
    </>
  );
}
