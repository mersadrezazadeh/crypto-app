"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CoinItem from "./CoinItem";

type CarouselProps = {
  currency: string;
  coins: any;
};

function Carousel({ currency, coins }: CarouselProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);

    function handleResize() {
      if (!ref.current) return;
      setWidth(ref.current?.scrollWidth - ref.current?.offsetWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref, width, setWidth]);

  return (
    // <div className="relative before:absolute before:right-0 before:top-0 before:bottom-0 before:w-[200px] before:z-10 before:bg-gradient-to-r before:from-transparent before:via-gray-0/30 dark:before:via-[#13121a80] before:to-[#F3F5F9] dark:before:to-[#13121A]">
    <motion.div ref={ref} className="overflow-hidden cursor-grab">
      <motion.div
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{ left: -width, right: 0 }}
        className="flex gap-3"
      >
        {coins.map((coin: any) => (
          <CoinItem key={coin.id} coin={coin} currency={currency} />
        ))}
      </motion.div>
    </motion.div>
    // </div>
  );
}

export default Carousel;
