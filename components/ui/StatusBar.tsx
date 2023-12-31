"use client";

import { formatCurrency } from "@/utils/helpers";
import ProgressBar from "@ramonak/react-progress-bar";

type StatusBarProps = {
  value1: number;
  value2: number;
  baseColor: string;
  bgColor: string;
  textColor: string;
  width: string;
};

function StatusBar({
  value1,
  value2,
  baseColor,
  bgColor,
  textColor,
  width,
}: StatusBarProps) {
  return (
    <>
      <div className="flex justify-between max-w-[90%]">
        <span style={{ color: textColor }}>{formatCurrency(value1)}</span>

        <span>{formatCurrency(value2)}</span>
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
