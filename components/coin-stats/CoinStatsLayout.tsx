import { getCoinStats, getTableCoins } from "@/services/apiCoins";
import Carousel from "./Carousel";
import CoinStats from "./CoinStats";

type CoinStatsLayoutProps = {
  currency: string;
  selectedCoin: string;
};

const NUM_COINS = 50;

async function CoinStatsLayout({
  currency,
  selectedCoin,
}: CoinStatsLayoutProps) {
  const coins = await getTableCoins(currency, 1, NUM_COINS);
  const coinData = await getCoinStats(
    selectedCoin,
    currency,
    "1703602203",
    "1704207003",
  );

  return (
    <>
      <Carousel coins={coins} currency={currency} />
      <CoinStats data={coinData} time="1" />
    </>
  );
}

export default CoinStatsLayout;
