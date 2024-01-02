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

type Data = {
  prices: [string, number][];
};

type CoinChartProps = {
  data1: Data;
  data2: Data;
  time: string;
};

function CoinChart({
  data1: { prices: prices1 },
  data2: { prices: prices2 },

  time,
}: CoinChartProps) {
  const dataSet1 = prices1.map((price) => price[1]);
  const dataSet2 = prices2.map((price) => price[1]);
  // const labels = prices.map((price) => price[0]);

  function getBackgroundColor1(
    context: ScriptableContext<"line">,
  ): CanvasGradient {
    const ctx: CanvasRenderingContext2D = context.chart.ctx;
    const height: number = ctx.canvas.clientHeight;
    const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0, "rgba(116, 116, 250, 0.5)");
    gradient.addColorStop(0.7, "rgba(116, 116, 250, 0.1)");

    return gradient;
  }

  function getBackgroundColor2(
    context: ScriptableContext<"line">,
  ): CanvasGradient {
    const ctx: CanvasRenderingContext2D = context.chart.ctx;
    const height: number = ctx.canvas.clientHeight;
    const gradient: CanvasGradient = ctx.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0, "rgba(216, 120, 250, 0.5)");
    gradient.addColorStop(0.7, "rgba(216, 120, 250, 0.1)");

    return gradient;
  }

  const data = {
    labels: Array.from(Array(dataSet1.length).keys()),
    datasets: [
      {
        data: dataSet1,
        backgroundColor: getBackgroundColor1,
        borderColor: "#424286",
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
        fill: true,
      },
      {
        data: dataSet2,
        backgroundColor: getBackgroundColor2,
        borderColor: "#d878fa",
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
