import { getCoin } from "@/services/apiCoins";

type CoinPageProps = {
  params: {
    coin: string;
  };
};

async function CoinPage({ params }: CoinPageProps) {
  const coin = await getCoin(params.coin);

  return <section>{params.coin}</section>;
}

export default CoinPage;

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
//
//
//
//
//
//
//
//
//
//
//
