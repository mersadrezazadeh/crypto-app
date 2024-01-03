"use client";

import { useRouter, useSearchParams } from "next/navigation";

function CurrencySelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currency = searchParams.get("currency") ?? "usd";
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "100";
  const selectedCoin = searchParams.get("selected_coin") ?? "bitcoin";

  function handleChange(value: string) {
    router.push(
      `/?page=${
        +page + 1
      }&Per_page=${perPage}&currency=${value}&selected_coin=${selectedCoin}`,
    );

    console.log(currency);
  }

  return (
    <select value={currency} onChange={(e) => handleChange(e.target.value)}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="jpy">JPY</option>
    </select>
  );
}

export default CurrencySelector;
