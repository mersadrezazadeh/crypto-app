import CoinsTable from "@/components/coins-table/CoinsTable";
import Header from "../components/header/Header";

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "100";

  const start = (+page - 1) * +per_page;
  const end = start + +per_page;

  return (
    <>
      <Header />
      <CoinsTable page={+page} per_page={+per_page} start={start} end={end} />
    </>
  );
}
