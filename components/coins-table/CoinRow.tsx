import { formatCurrency, formatLargeNumber } from "@/utils/helpers";
import Image from "next/image";
import CoinLink from "./CoinLink";
import PriceChange from "../ui/PriceChange";
import StatusBar from "../ui/StatusBar";
import Sparkline from "./Sparkline";

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  total_supply: number;
  circulating_supply: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  sparkline_in_7d: { price: number[] };
};

type CoinRowProps = { coin: Coin; currency: string };

function CoinRow({ coin, currency }: CoinRowProps) {
  const {
    id,
    symbol,
    name,
    image,
    current_price: currentPrice,
    market_cap: marketCap,
    market_cap_rank: marketCapRank,
    total_volume: totalVolume,
    total_supply: totalSupply,
    circulating_supply: circulatingSupply,
    price_change_percentage_1h_in_currency: priceChange1h,
    price_change_percentage_24h_in_currency: priceChange24h,
    price_change_percentage_7d_in_currency: priceChange7d,
    sparkline_in_7d: { price: sparklinePrice },
  } = coin;

  return (
    <div
      role="row"
      className="flex items-center border-b border-gray-100 px-1 py-6 text-gray-900 last:border-0 md:px-3 dark:border-gray-800"
    >
      <div className="w-[3%] text-center text-[10px] font-medium md:text-base">
        {marketCapRank}
      </div>

      <div className="flex w-[5%] justify-center">
        <Image src={image} alt={name} width={30} height={30} />
      </div>

      <div className="w-[13%] justify-center text-center text-[10px] font-medium md:text-base">
        <CoinLink id={id} name={name} symbol={symbol} />
      </div>

      <div className="w-[8%] text-center text-[10px] font-medium md:text-base">
        {formatCurrency(currentPrice, currency)}
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={priceChange1h} />
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={priceChange24h} />
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={priceChange7d} />
      </div>

      <div className="w-[18%] px-1 sm:px-2">
        <StatusBar
          value1={totalVolume}
          value2={marketCap}
          baseColor="#9ca3af"
          bgColor="#627eea"
          textColor="#627eea"
          width="100%"
        />
      </div>

      <div className="w-[18%] px-1 sm:px-2">
        <StatusBar
          value1={circulatingSupply}
          value2={totalSupply}
          baseColor="#9ca3af"
          bgColor="#f7931A"
          textColor="#f7931A"
          width="100%"
        />
      </div>

      <div className="w-[14%]">
        <Sparkline
          price={sparklinePrice}
          priceChange={priceChange7d}
          reducedBy={6}
          defaultColor={false}
        />
      </div>
    </div>
  );
}

export default CoinRow;
