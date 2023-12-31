import Image from "next/image";
import Link from "next/link";
import Sparkline from "./Sparkline";
import { formatCurrency, formatePrice } from "@/utils/helpers";
import PriceChange from "../ui/PriceChange";
import StatusBar from "../ui/StatusBar";

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
    market_cap_rank,
    total_volume,
    total_supply,
    circulating_supply,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    sparkline_in_7d: sparkline,
  } = coin;

  return (
    <div
      role="row"
      className="grid grid-cols-9 items-center gap-2 border-b border-gray-100 px-3 py-6 last:border-0 dark:border-gray-800 text-gray-900"
    >
      <div>{market_cap_rank}</div>

      <Link href={`/${id}`} className="flex items-center">
        <Image src={image} alt={name} width={32} height={32} />
        <span>
          {name} ({symbol})
        </span>
      </Link>

      <div>$ {formatCurrency(current_price)}</div>

      <div>
        <PriceChange value={price_change_percentage_1h_in_currency} />
      </div>

      <div>
        <PriceChange value={price_change_percentage_24h_in_currency} />
      </div>

      <div>
        <PriceChange value={price_change_percentage_7d_in_currency} />
      </div>

      <div>
        <StatusBar
          value1={total_volume}
          value2={market_cap}
          symbol="$"
          baseColor="#ddd"
          bgColor="hsl(284, 93%, 73%)"
          width="90%"
        />
      </div>

      <div>
        <StatusBar
          value1={circulating_supply}
          value2={total_supply}
          symbol="$"
          baseColor="#ddd"
          bgColor="hsl(284, 93%, 73%)"
          width="90%"
        />
      </div>

      <div className="h-full">
        <Sparkline
          price={sparkline.price}
          priceChange={formatePrice(price_change_percentage_7d_in_currency)}
          reducedBy={6}
          defaultColor={false}
        />
      </div>
    </div>
  );
}

export default CoinRow;
