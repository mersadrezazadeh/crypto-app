"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";

type PaginationControlProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  maxPage: number;
};

function PaginationControl({
  hasNextPage,
  hasPrevPage,
  maxPage,
}: PaginationControlProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log(router);

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "100";
  const currency = searchParams.get("currency") ?? "usd";
  const selectedCoin = searchParams.get("selected_coin") ?? "bitcoin";

  function handlePrev() {
    router.push(
      `/?page=${
        +page - 1
      }&per_page=${perPage}&currency=${currency}&selected_coin=${selectedCoin}`,
    );
  }

  function handleNext() {
    router.push(
      `/?page=${
        +page + 1
      }&Per_page=${perPage}&currency=${currency}&selected_coin=${selectedCoin}`,
    );
  }

  return (
    <div className="flex gap-8 text-gray-900">
      <Button size="small" disabled={!hasPrevPage} onClick={handlePrev}>
        Prev
      </Button>

      <span>
        {page} / {maxPage}
      </span>

      <Button size="small" disabled={!hasNextPage} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default PaginationControl;
