function PriceChange({ value }: { value: number }) {
  const isPositive = value >= 0;

  return (
    <div>
      <span className={`${isPositive ? "text-green-200" : "text-red-200"}`}>
        {value}%
      </span>
    </div>
  );
}

export default PriceChange;
