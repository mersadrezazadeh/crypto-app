"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type CoinOverviewProps = {
  image: string;
  name: string;
  symbol: string;
  homepage: string;
  currentPrice: any;
};

function CoinOverview({
  image,
  name,
  symbol,
  homepage,
  currentPrice,
}: CoinOverviewProps) {
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency") ?? "usd";

  console.log(currency);

  return (
    <div className="bg-gray-0 dark:bg-gray-850 rounded-md p-4">
      <div className="flex gap-4">
        <Image src={image} alt={name} width={40} height={40} />
        <div>
          <h1>
            {name} ({symbol.toUpperCase()})
          </h1>
          <Link href={homepage}>Official website</Link>
        </div>
      </div>

      <div>
        <p>{currentPrice[currency]}</p>
      </div>
    </div>
  );
}

export default CoinOverview;
