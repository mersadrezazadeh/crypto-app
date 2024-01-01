import Image from "next/image";
import PriceChange from "../ui/PriceChange";
import { formatCurrency, formatDate } from "@/utils/helpers";

type CoinOverviewProps = {
  currency: string;
  image: string;
  name: string;
  symbol: string;
  homepage: string;
  currentPrice: any;
  priceChange24h: number;
  ath: any;
  athDate: any;
  atl: any;
  atlDate: any;
};

function CoinOverview({
  currency,
  image,
  name,
  symbol,
  homepage,
  currentPrice,
  priceChange24h,
  ath,
  athDate,
  atl,
  atlDate,
}: CoinOverviewProps) {
  return (
    <div className="bg-gray-0 dark:bg-gray-850 rounded-md p-4">
      <div className="flex gap-4">
        <Image src={image} alt={name} width={40} height={40} />
        <div>
          <h1>
            {name} ({symbol.toUpperCase()})
          </h1>
          <a href={homepage} target="_blank">
            Official website
          </a>
        </div>
      </div>

      <div className="flex">
        {formatCurrency(currentPrice[currency], currency)}
        <PriceChange value={priceChange24h} />
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h2>All Time High:</h2>
          <p>{formatDate(athDate[currency])}</p>
        </div>
        <p>{formatCurrency(ath[currency], currency)}</p>

        <div>
          <div>All Time Low:</div>
          <p>{formatDate(atlDate[currency])}</p>
        </div>
        <p>{formatCurrency(atl[currency], currency)}</p>
      </div>
    </div>
  );
}

export default CoinOverview;
