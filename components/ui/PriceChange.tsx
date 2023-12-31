function PriceChange({ value }: { value: number }) {
  const isNegative = value && value < 0;

  const formattedValue = value.toFixed(2);

  return (
    <div>
      <span>{formattedValue}%</span>
    </div>
  );
}

export default PriceChange;
