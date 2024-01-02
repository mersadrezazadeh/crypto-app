import { getCoinChart, getTableCoins } from "@/services/apiCoins";
import Carousel from "./Carousel";

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
  const chart1 = await getCoinChart(
    selectedCoin1,
    currency,
    "1392577232",
    "1422577232",
  );

  return (
    <>
      <Carousel coins={coins} currency={currency} />
    </>
  );
}

export default CoinsCarouselLayout;
