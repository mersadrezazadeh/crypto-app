"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

function Sparkline({ price }: { price: number[] }) {
  const data = {
    labels: price,
    datasets: [
      {
        data: price,
        borderColor: "hsla(284, 93%, 73%, 0.5)",
        pointRadius: 0,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };
  return <Line width={150} height={30} options={options} data={data} />;
}

export default Sparkline;
