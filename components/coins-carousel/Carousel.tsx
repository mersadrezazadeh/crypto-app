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
    <div className="relative before:absolute before:right-0 before:top-0 before:bottom-0 before:w-5 before:z-10 before:bg-gradient-to-r before:from-transparent before:via-gray-0/30 before:to-gray-100 after:absolute after:top-0 after:bottom-0 after:left-0 after:bg-gradient-to-l after:from-transparent after:via-gray-0/30 after:to-gray-100 after:z-10 after:w-5">
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
    </div>
  );
}

export default Carousel;
