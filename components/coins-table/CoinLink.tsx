"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type CoinLinkProps = {
  id: string;
  name: string;
  symbol: string;
};

function CoinLink({ id, name, symbol }: CoinLinkProps) {
  const searchParams = useSearchParams();
  const currency = searchParams.get("currency") ?? "usd";

  return (
    <Link
      href={`/${id}?currency=${currency}`}
      className="flex w-[13%] justify-center text-center text-base font-medium"
    >
      {name} ({symbol})
    </Link>
  );
}

export default CoinLink;
