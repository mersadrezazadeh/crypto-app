import Header from "@/components/header/Header";
import CoinDetails from "@/components/coin-details/CoinDetails";

type CoinPageProps = {
  params: {
    coinId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

function CoinPage({ params, searchParams }: CoinPageProps) {
  const currency = searchParams["currency"] ?? "usd";

  return (
    <>
      <Header />
      <main className="container py-6 px-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CoinDetails
          selectedCoin={params.coinId}
          currency={currency.toString()}
        />
      </main>
    </>
  );
}

export default CoinPage;
