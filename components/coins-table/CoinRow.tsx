function CoinRow({ coin }: { coin: object }) {
  return (
    <div
      role="row"
      className="grid grid-cols-9 items-center gap-2 border-b border-gray-100 px-3 py-6 last:border-0 dark:border-gray-800"
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  );
}

export default CoinRow;
