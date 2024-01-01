import CoinDetails from "@/components/coin-details/CoinDetails";

type CoinPageProps = {
  params: {
    coin: string;
  };
};

function CoinPage({ params }: CoinPageProps) {
  return (
    <section>
      <CoinDetails selectedCoin={params.coin} />
    </section>
  );
}

export default CoinPage;
