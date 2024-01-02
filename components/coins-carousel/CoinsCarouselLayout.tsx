import { getCoinChart, getTableCoins } from "@/services/apiCoins";
import Carousel from "./Carousel";
import CoinChart from "./CoinChart";

type CoinsCarouselLayoutProps = {
  currency: string;
  selectedCoin: string;
};

const NUM_COINS = 50;

async function CoinsCarouselLayout({
  currency,
  selectedCoin,
}: CoinsCarouselLayoutProps) {
  const coins = await getTableCoins(currency, 1, NUM_COINS);
  const chartData = await getCoinChart(
    selectedCoin,
    currency,
    "1703602203",
    "1704207003",
  );

  return (
    <>
      <Carousel coins={coins} currency={currency} />
      <CoinChart data={chartData} time="1" />
    </>
  );
}

export default CoinsCarouselLayout;
