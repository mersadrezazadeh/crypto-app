import { formatCurrency } from "@/utils/helpers";

type CoinMarketProps = {
  currency: string;
  marketCap: any;
  fullyDilutedValuation: any;
  totalVolume: any;
  circulatingSupply: number;
  maxSupply: number;
};

function CoinMarket({
  currency,
  marketCap,
  fullyDilutedValuation,
  totalVolume,
  circulatingSupply,
  maxSupply,
}: CoinMarketProps) {
  return (
    <section className="bg-gray-0 dark:bg-gray-850 rounded-md p-4 col-span-2">
      <h2>Market</h2>

      <div className="grid grid-cols-4">
        <div>
          <h3>Market cap</h3>
          <p>{formatCurrency(marketCap[currency], currency)}</p>
        </div>
        <div>
          <h3>Fully diluted valuation</h3>
          <p>{formatCurrency(fullyDilutedValuation[currency], currency)}</p>
        </div>
        <div>
          <h3>Total volume (24h)</h3>
          <p>{formatCurrency(totalVolume[currency], currency)}</p>
        </div>
        <div>
          <h3>Volume/Market</h3>
          <p>
            {formatCurrency(
              totalVolume[currency] / marketCap[currency],
              currency
            )}
          </p>
        </div>
        <div>
          <h3>Circulating supply</h3>
          <p>{formatCurrency(circulatingSupply, currency)}</p>
        </div>
        <div>
          <h3>Max supply</h3>
          <p>{formatCurrency(maxSupply, currency)}</p>
        </div>
      </div>
    </section>
  );
}

export default CoinMarket;
