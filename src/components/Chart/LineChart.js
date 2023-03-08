import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart by Age",
      },
    },
  };

  const labels = ["0", "20", "25", "30", "40", "50", "55"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "age",
        data: [0, 30, 500, 50, 15, 2, 5],
        borderColor: "rgb(172, 216, 170, 0.2)",
        backgroundColor: "rgba(172, 216, 170, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
