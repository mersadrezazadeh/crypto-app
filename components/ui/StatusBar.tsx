"use client";

import { formatLargeNumber } from "@/utils/helpers";
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
      <div className="flex justify-between">
        <span className="font-medium" style={{ color: textColor }}>
          {formatLargeNumber(value1)}
        </span>

        <span className="font-medium text-gray-400">
          {formatLargeNumber(value2)}
        </span>
      </div>

      <ProgressBar
        completed={value1}
        maxCompleted={value2}
        animateOnRender={true}
        labelColor="transparent"
        baseBgColor={baseColor}
        bgColor={bgColor}
        height="6px"
        width={width}
      />
    </>
  );
}

export default StatusBar;
