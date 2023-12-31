export function formatCurrency(number: number) {
  const formattedCurrency = number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });

  return formattedCurrency;
}

export function formatNum3_2(num: number) {
  let baseNum = Math.floor(num);
  let decimal = num - baseNum;
  let formattedNum =
    baseNum.toString().slice(0, 3) +
    (decimal > 0 ? "." + decimal.toString().slice(2, 4) : "");
  return formattedNum;
}

export function numberScale(num: number) {
  if (num >= 1e12) {
    return "T";
  } else if (num >= 1e9) {
    return "B";
  } else if (num >= 1e6) {
    return "M";
  } else {
    return "";
  }
}

export function formatePrice(price: number) {
  return parseFloat(price.toFixed(2));
}

type SimpleArray = number[];
type TupleArray = [string, number][];
type GetReducedArrayType = SimpleArray | TupleArray;

export function getReducedArray<T extends GetReducedArrayType>(
  array: T,
  num: number
): T {
  const lastIndex = array.length - 1;

  return array.filter((_, index) => {
    return index === 0 || index === lastIndex || (index + 1) % num === 0;
  }) as T;
}
