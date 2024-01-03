"use client";

import { useRouter, useSearchParams } from "next/navigation";

function PerPageSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currency = searchParams.get("currency") ?? "usd";
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "100";
  const selectedCoin = searchParams.get("selected_coin") ?? "bitcoin";

  function handleChange(value: string) {
    router.push(
      `/?page=${page}&per_page=${value}&currency=${currency}&selected_coin=${selectedCoin}`,
    );
  }

  return (
    <select value={perPage} onChange={(e) => handleChange(e.target.value)}>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="150">150</option>
      <option value="200">200</option>
    </select>
  );
}

export default PerPageSelector;
