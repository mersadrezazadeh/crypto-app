import { getCoinDetails } from "@/utils/actions";
import CoinOverview from "./CoinOverview";
import CoinChart from "./CoinChart";
import CoinMarket from "./CoinMarket";
import CoinDescription from "./CoinDescription";

type CoinDetailsProps = {
  selectedCoin: string;
  currency: string;
};

async function CoinDetails({ selectedCoin, currency }: CoinDetailsProps) {
  const coin = await getCoinDetails(selectedCoin);

  const {
    name,
    symbol,
    image: { small: image },
    links: { homepage },
    market_data: {
      current_price: currentPrice,
      price_change_percentage_24h: priceChange24h,
      ath,
      ath_date: athDate,
      atl,
      atl_date: atlDate,
      sparkline_7d: { price: sparklinePrice },
      market_cap: marketCap,
      fully_diluted_valuation: fullyDilutedValuation,
      total_volume: totalVolume,
      circulating_supply: circulatingSupply,
      max_supply: maxSupply,
    },
    description: { en: description },
  } = coin;

  return (
    <>
      <CoinOverview
        currency={currency}
        image={image}
        name={name}
        symbol={symbol}
        homepage={homepage.at(0)?.toString() || ""}
        currentPrice={currentPrice}
        priceChange24h={priceChange24h}
        ath={ath}
        athDate={athDate}
        atl={atl}
        atlDate={atlDate}
      />
      <CoinChart sparklinePrice={sparklinePrice} />
      <CoinMarket
        currency={currency}
        marketCap={marketCap}
        fullyDilutedValuation={fullyDilutedValuation}
        totalVolume={totalVolume}
        circulatingSupply={circulatingSupply}
        maxSupply={maxSupply}
      />
      <CoinDescription description={description} />
    </>
  );
}

export default CoinDetails;
