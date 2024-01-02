import { getCoinChart, getTableCoins } from "@/services/apiCoins";
import Carousel from "./Carousel";
import CoinChart from "./CoinChart";

type CoinsCarouselLayoutProps = {
  currency: string;
  selectedCoin1: string;
  selectedCoin2: string;
};

const NUM_COINS = 50;

async function CoinsCarouselLayout({
  currency,
  selectedCoin1,
  selectedCoin2,
}: CoinsCarouselLayoutProps) {
  const coins = await getTableCoins(currency, 1, NUM_COINS);
  const chartData1 = await getCoinChart(
    selectedCoin1,
    currency,
    "1703602203",
    "1704207003",
  );
  const chartData2 = await getCoinChart(
    selectedCoin2,
    currency,
    "1703602203",
    "1704207003",
  );

  return (
    <>
      <Carousel coins={coins} currency={currency} />
      {chartData1 && chartData2 && (
        <CoinChart data1={chartData1} data2={chartData2} time="1" />
      )}
    </>
  );
}

export default CoinsCarouselLayout;
