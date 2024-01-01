"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import CoinItem from "./CoinItem";

type SliderProps = {
  currency: string;
  coins: any;
};

function Slider({ currency, coins }: SliderProps) {
  const [currentCoin, setCurrentCoin] = useState(0);

  function handlePrev() {
    if (currentCoin > 0) setCurrentCoin((c) => c - 1);
  }

  function handleNext() {
    if (currentCoin < coins.length - 4) setCurrentCoin((c) => c + 1);
  }

  return (
    <div className="relative before:absolute before:right-0 before:top-0 before:bottom-0 before:w-[200px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-gray-0/30 dark:before:via-[#13121a80] before:to-[#F3F5F9] dark:before:to-[#13121A]">
      <button
        onClick={handlePrev}
        className="absolute -left-5 z-10 top-1/2 -translate-y-1/2"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-5 z-10 top-1/2 -translate-y-1/2"
      >
        <FaAngleRight />
      </button>

      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="overflow-clip">
          <motion.div
            animate={{
              x: `calc(-${currentCoin * 250}px - ${currentCoin}rem)`,
            }}
            className="flex gap-3"
          >
            {coins.map((coin: any) => (
              <CoinItem key={coin.id} coin={coin} currency={currency} />
            ))}
          </motion.div>
        </div>
      </MotionConfig>
    </div>
  );
}

export default Slider;
