import { getTableCoins } from "@/services/apiCoins";
import Slider from "./Slider";

type CoinsSliderLayoutProps = {
  currency: string;
};

const NUM_COINS = 50;

async function CoinsSliderLayout({ currency }: CoinsSliderLayoutProps) {
  const coins = await getTableCoins(currency, 1, NUM_COINS);

  return (
    <div className="relative">
      <Slider coins={coins} currency={currency} />
    </div>
  );
}

export default CoinsSliderLayout;
