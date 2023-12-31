"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Filler,
  type ScriptableContext,
} from "chart.js";
import { reducedArray } from "@/utils/helpers";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const options = {
  fill: true,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

type SparklineProps = {
  price: number[];
  priceChange: number;
  defaultColor: boolean;
  reducedBy: number;
};

function Sparkline({
  price,
  priceChange,
  defaultColor,
  reducedBy,
}: SparklineProps) {
  const isPositive = priceChange >= 0;
  const dataSet = reducedArray(price, reducedBy);

  function getBackgroundColor(
    context: ScriptableContext<"line">
  ): CanvasGradient {
    const ctx: CanvasRenderingContext2D = context.chart.ctx;
    const height: number = ctx.canvas.clientHeight;
    const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);

    if (defaultColor) {
      gradient.addColorStop(0, "rgba(116, 116, 250, 0.5)");
      gradient.addColorStop(0.7, "rgba(116, 116, 250, 0.1)");
    } else if (isPositive) {
      gradient.addColorStop(0, "rgba(0, 245, 228, 0.5)");
      gradient.addColorStop(0.7, "rgba(0, 245, 228, 0.1)");
    } else {
      gradient.addColorStop(0, "rgba(255, 0, 97, 0.5)");
      gradient.addColorStop(0.7, "rgba(255, 0, 97, 0.1)");
    }

    gradient.addColorStop(1, "transparent");
    return gradient;
  }

  function getBorderColor() {
    if (defaultColor) return "#7878FA";
    else if (isPositive) return "#00f5e4";
    else return "#ff0061";
  }

  const data = {
    labels: Array.from(Array(dataSet.length).keys()),
    datasets: [
      {
        data: dataSet,
        backgroundColor: getBackgroundColor,
        borderColor: getBorderColor,
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  return <Line width={150} height={30} options={options} data={data} />;
}

export default Sparkline;
