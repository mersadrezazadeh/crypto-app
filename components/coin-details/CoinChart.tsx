import Sparkline from "../coins-table/Sparkline";

type CoinChartProps = {
  sparklinePrice: number[];
};

function CoinChart({ sparklinePrice }: CoinChartProps) {
  return (
    <section className="bg-gray-0 flex flex-col dark:bg-gray-850 rounded-md p-4">
      <h2>Last 7 days</h2>
      <div>
        <Sparkline
          price={sparklinePrice}
          priceChange={1}
          reducedBy={6}
          defaultColor={true}
        />
      </div>
    </section>
  );
}

export default CoinChart;
