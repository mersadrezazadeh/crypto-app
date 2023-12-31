import Image from "next/image";
import Link from "next/link";
import Sparkline from "./Sparkline";
import { formatCurrency } from "@/utils/helpers";
import PriceChange from "../ui/PriceChange";

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
    sparkline_in_7d,
  } = coin;

  return (
    <div
      role="row"
      className="grid grid-cols-9 items-center gap-2 border-b border-gray-100 px-3 py-6 last:border-0 dark:border-gray-800 text-gray-900"
    >
      <div>{market_cap_rank}</div>

      <Link href={`/${id}`} className="flex items-center">
        <Image src={image} alt={`${name} icon`} width={32} height={32} />
        <span>{name}</span>
        <span>({symbol})</span>
      </Link>

      <div>${formatCurrency(current_price)}</div>

      <div>
        <PriceChange value={price_change_percentage_1h_in_currency} />
      </div>

      <div>
        <PriceChange value={price_change_percentage_24h_in_currency} />
      </div>

      <div>
        <PriceChange value={price_change_percentage_7d_in_currency} />
      </div>

      <div>7</div>
      <div>8</div>

      <div className="h-full">
        <Sparkline price={sparkline_in_7d.price} />
      </div>
    </div>
  );
}

export default CoinRow;
