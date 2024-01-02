import Image from "next/image";
import PriceChange from "../ui/PriceChange";
import { formatCurrency } from "@/utils/helpers";
import { motion } from "framer-motion";

type Coin = {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h_in_currency: number;
};

type CoinItemProps = {
  currency: string;
  coin: Coin;
};

function CoinItem({ currency, coin }: CoinItemProps) {
  const {
    name,
    symbol,
    image,
    current_price: currentPrice,
    price_change_percentage_24h_in_currency: priceChange24h,
  } = coin;

  return (
    <motion.div className="p-4 rounded-lg flex items-center text-sm min-w-[250px] bg-gray-0">
      <div className="pr-3">
        <Image src={image} alt={name} width={40} height={40} />
      </div>

      <div className="w-full">
        <h3 className="text-base">
          {name} <span className="uppercase">({symbol})</span>
        </h3>
        <div className="flex w-full dark:text-[#D1D1D1] text-[#424286] mt-1">
          <h3 className="pr-2">
            {formatCurrency(currentPrice, currency)}
            <span className="uppercase">{currency}</span>
          </h3>
          <PriceChange value={priceChange24h} />
        </div>
      </div>
    </motion.div>
  );
}

export default CoinItem;
