import { getCoinDetails } from "@/services/apiCoins";
import CoinOverview from "./CoinOverview";
import CoinMarket from "./CoinMarket";
import CoinDescription from "./CoinDescription";
import CoinChart from "./CoinChart";

type Coin = {
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  links: {
    homepage: string[];
  };
  market_data: {
    current_price: {
      usd: number;
      eur: number;
      gbp: number;
      jpy: number;
    };
    price_change_percentage_24h: number;
    sparkline_7d: {
      price: number[];
    };
    market_cap: {
      usd: number;
      eur: number;
      gbp: number;
      jpy: number;
    };
    fully_diluted_valuation: {
      usd: number;
      eur: number;
      gbp: number;
      jpy: number;
    };
    total_volume: {
      usd: number;
      eur: number;
      gbp: number;
      jpy: number;
    };
    circulating_supply: number;
    max_supply: number;
  };
  description: {
    en: string;
  };
};

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
      <CoinMarket />
      <CoinDescription />
    </>
  );
}

export default CoinDetails;

// name
// symbol
// small image
// links
// current_price
// price_change_percentage_1h_in_currency
// ath
// atl
// ath_date
// atl_date
// description
// blockchain_site
// total_volume
// mcap_to_tvl_ratio
// market_cap
// market_cap_change_24h
// fully_diluted_valuation
// max_supply
// circulating_supply
