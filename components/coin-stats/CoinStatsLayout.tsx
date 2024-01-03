import { getCoinStats, getTableCoins } from "@/utils/actions";
import Carousel from "./Carousel";
import CoinStats from "./CoinStats";
import { getCurrency, getSelectedCoin } from "@/contexts/ServerContext";

const NUM_COINS = 50;

async function CoinStatsLayout() {
  const currency = getCurrency();
  const selectedCoin = getSelectedCoin();
  const coins = await getTableCoins(currency, 1, NUM_COINS);
  const coinData = await getCoinStats(
    selectedCoin,
    currency,
    "1703602203",
    "1704207003",
  );

  return (
    <>
      <Carousel coins={coins} currency={currency} selectedCoin={selectedCoin} />
      <CoinStats data={coinData} time="1" />
    </>
  );
}

export default CoinStatsLayout;
