// type LookupItem = {
//   value: number;
//   symbol: string;
// };

// const lookup: LookupItem[] = [
//   { value: 1, symbol: "" },
//   { value: 1000, symbol: "K" },
//   { value: 1000000, symbol: "M" },
//   { value: 1000000000, symbol: "B" },
//   { value: 1000000000000, symbol: "T" },
// ];

// const noTrailingZeroRx: RegExp = /\.0+$|(\.[0-9]*[1-9])0+$/;

// export function formatCurrency(value: number) {
//   if (value !== null && value < 1) return value.toFixed(3);

//   const item: LookupItem | undefined = lookup
//     .slice()
//     .reverse()
//     .find((item) => {
//       return value >= item.value;
//     });
//   return item
//     ? (value / item.value).toFixed(2).replace(noTrailingZeroRx, "$1") +
//         item.symbol
//     : "0";
// }

export function formatCurrency(price: number, currency: string) {
  const formattedPrice = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(price);

  return formattedPrice;
}

export function formatDate(date: string) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  }).format(new Date(date));

  return formattedDate;
}

type SimpleArray = number[];
type TupleArray = [string, number][];
type GetReducedArrayType = SimpleArray | TupleArray;

export function reducedArray<T extends GetReducedArrayType>(
  array: T,
  num: number
): T {
  const lastIndex = array.length - 1;

  return array.filter((_, index) => {
    return index === 0 || index === lastIndex || (index + 1) % num === 0;
  }) as T;
}
