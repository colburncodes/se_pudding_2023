import React from "react";
import selfgrading from "../../data/selfgrading.json";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SelfGradingChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Self Grading on Qualities",
      },
    },
  };
  const labels = [
    "attractive",
    "sincere",
    "intelligent",
    "fun",
    "ambitious",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "no-match",
        data: [
          selfgrading.percentage[0],
          selfgrading.percentage[2],
          selfgrading.percentage[4],
          selfgrading.percentage[6],
          selfgrading.percentage[8],
        ],
        backgroundColor: "rgba(172, 216, 170, 0.5)",
      },
      {
        label: "high-match",
        data: [
          selfgrading.percentage[1],
          selfgrading.percentage[3],
          selfgrading.percentage[5],
          selfgrading.percentage[7],
          selfgrading.percentage[9],
        ],
        backgroundColor: "rgba(231, 143, 142, 0.5)",
      },
    ],
    options: {
      type: "bar",
      data: selfgrading,
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}
