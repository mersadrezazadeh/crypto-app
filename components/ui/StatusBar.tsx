"use client";

import { formatNum3_2, numberScale } from "@/utils/helpers";
import ProgressBar from "@ramonak/react-progress-bar";

type StatusBarProps = {
  symbol: string;
  value1: number;
  value2: number;
  baseColor: string;
  bgColor: string;
  width: string;
};

function StatusBar({
  symbol,
  value1,
  value2,
  baseColor,
  bgColor,
  width,
}: StatusBarProps) {
  return (
    <>
      <div className="flex justify-between max-w-[90%]">
        <span>{`${symbol}${formatNum3_2(value1)} ${numberScale(value1)}`}</span>

        <span>{`${symbol}${formatNum3_2(value2)} ${numberScale(value2)}`}</span>
      </div>

      <ProgressBar
        completed={value1}
        maxCompleted={value2}
        animateOnRender={true}
        labelColor="transparent"
        baseBgColor={baseColor}
        bgColor={bgColor}
        height="5px"
        width={width}
      />
    </>
  );
}

export default StatusBar;
