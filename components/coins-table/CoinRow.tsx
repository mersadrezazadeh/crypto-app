import Image from "next/image";
import Sparkline from "./Sparkline";
import { formatCurrency, formatPrice } from "@/utils/helpers";
import PriceChange from "../ui/PriceChange";
import StatusBar from "../ui/StatusBar";
import CoinLink from "./CoinLink";

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

type CoinRowProps = { coin: Coin };

function CoinRow({ coin }: CoinRowProps) {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank: rank,
    total_volume,
    total_supply,
    circulating_supply,
    price_change_percentage_1h_in_currency: priceChange1h,
    price_change_percentage_24h_in_currency: priceChange24h,
    price_change_percentage_7d_in_currency: priceChange7d,
    sparkline_in_7d: sparkline,
  } = coin;

  return (
    <div
      role="row"
      className="flex items-center border-b border-gray-100 px-3 py-6 last:border-0 dark:border-gray-800 text-gray-900"
    >
      <div className="w-[3%] text-center">{rank}</div>

      <div className="w-[5%] flex justify-center">
        <Image src={image} alt={name} width={30} height={30} />
      </div>

      <CoinLink id={id} name={name} symbol={symbol} />

      <div className="w-[8%] text-center">
        ${formatCurrency(current_price)}C
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={formatPrice(priceChange1h)} />
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={formatPrice(priceChange24h)} />
      </div>

      <div className="w-[7%] text-center">
        <PriceChange value={formatPrice(priceChange7d)} />
      </div>

      <div className="w-[18%] px-2">
        <StatusBar
          value1={total_volume}
          value2={market_cap}
          baseColor="#9ca3af"
          bgColor="#627eea"
          textColor="#627eea"
          width="100%"
        />
      </div>

      <div className="w-[18%] px-2">
        <StatusBar
          value1={circulating_supply}
          value2={total_supply}
          baseColor="#9ca3af"
          bgColor="#f7931A"
          textColor="#f7931A"
          width="100%"
        />
      </div>

      <div className="w-[14%]">
        <Sparkline
          price={sparkline.price}
          priceChange={formatPrice(priceChange7d)}
          reducedBy={6}
          defaultColor={false}
        />
      </div>
    </div>
  );
}

export default CoinRow;
