import { getTableCoins } from "@/services/apiCoins";
import Carousel from "./Carousel";

type CoinsCarouselLayoutProps = {
  currency: string;
};

const NUM_COINS = 50;

async function CoinsCarouselLayout({ currency }: CoinsCarouselLayoutProps) {
  const coins = await getTableCoins(currency, 1, NUM_COINS);

  return <Carousel coins={coins} currency={currency} />;
}

export default CoinsCarouselLayout;
