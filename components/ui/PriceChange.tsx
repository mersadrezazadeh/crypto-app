import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

function PriceChange({ value }: { value: number }) {
  const isPositive = value >= 0;

  return (
    <div
      className={`flex items-center justify-center text-[10px] font-medium md:gap-0.5 md:text-base ${
        isPositive ? "text-green-200" : "text-red-200"
      }`}
    >
      {isPositive ? <FaCaretUp /> : <FaCaretDown />}
      <span>{Math.abs(+value?.toFixed(2))}%</span>
    </div>
  );
}

export default PriceChange;
