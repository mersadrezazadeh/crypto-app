"use client";

import { useRouter, useSearchParams } from "next/navigation";

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

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "100";

  return (
    <div className="text-gray-900 flex gap-8">
      <button
        disabled={!hasPrevPage}
        onClick={() => router.push(`/?page=${+page - 1}&per_page=${per_page}`)}
      >
        Prev
      </button>

      <span>
        {page} / {maxPage}
      </span>

      <button
        disabled={!hasNextPage}
        onClick={() => router.push(`/?page=${+page + 1}&Per_page=${per_page}`)}
      >
        Next
      </button>
    </div>
  );
}

export default PaginationControl;
