import Image from "next/image";
import PriceChange from "../ui/PriceChange";
import { formatCurrency } from "@/utils/helpers";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";

type Coin = {
  id: string;
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
    id,
    name,
    symbol,
    image,
    current_price: currentPrice,
    price_change_percentage_24h_in_currency: priceChange24h,
  } = coin;
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCoin = searchParams.get("selected_coin") ?? "bitcoin";

  function handleSelectCoin() {
    if (selectedCoin === id) return;

    router.push(`/?selected_coin=${id}&currency=${currency}`);
  }

  return (
    <motion.div
      className={`flex min-w-64 items-center rounded-lg  px-2 py-4 text-sm ${
        selectedCoin === id ? "bg-brand-400" : "bg-gray-0 "
      }`}
    >
      <div className="pr-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          draggable={false}
        />
      </div>

      <div className="w-full">
        <h3 onClick={handleSelectCoin} className="cursor-pointer text-base">
          {name} <span className="uppercase">({symbol})</span>
        </h3>
        <div className="mt-1 flex w-full text-[#424286] dark:text-[#D1D1D1]">
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
