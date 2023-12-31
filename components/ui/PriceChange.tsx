function PriceChange({ value }: { value: number }) {
  const isPositive = value >= 0;

  return (
    <div>
      <span className={`${isPositive ? "text-green" : "text-red"}`}>
        {value}%
      </span>
    </div>
  );
}

export default PriceChange;
