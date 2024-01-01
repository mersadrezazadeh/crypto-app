"use client";

import { useRouter, useSearchParams } from "next/navigation";

function CurrencyToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currency = searchParams.get("currency") ?? "usd";

  return (
    <select
      value={currency}
      onChange={(e) => router.push(`?currency=${e.target.value}`)}
    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="jpy">JPY</option>
    </select>
  );
}

export default CurrencyToggle;
