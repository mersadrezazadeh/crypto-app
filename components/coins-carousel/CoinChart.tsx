"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  type ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
);

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

const reduceBy = {
  "1": 16,
  "7": 12,
  "14": 18,
  "30": 22,
  "365": 16,
  "1825": 55,
  max: 92,
};

type CoinChartProps = {
  data: { prices: [string, number][] };
  time: string;
};

function CoinChart({ data: { prices }, time }: CoinChartProps) {
  const dataSet = prices.map((price) => price[1]);

  function getBackgroundColor(
    context: ScriptableContext<"line">,
  ): CanvasGradient {
    const ctx: CanvasRenderingContext2D = context.chart.ctx;
    const height: number = ctx.canvas.clientHeight;
    const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0, "rgba(116, 116, 250, 0.5)");
    gradient.addColorStop(0.7, "rgba(116, 116, 250, 0.1)");

    return gradient;
  }

  const data = {
    labels: Array.from(Array(dataSet.length).keys()),
    datasets: [
      {
        data: dataSet,
        backgroundColor: getBackgroundColor,
        borderColor: "#424286",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default CoinChart;
