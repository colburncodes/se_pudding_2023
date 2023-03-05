import React from "react";
import qualities from "../../data/qualities.json";
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

export function QualitiesChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Importance of Qualities in a Partner",
      },
    },
  };
  const labels = [
    "attractive",
    "sincere",
    "intelligent",
    "fun",
    "ambitious",
    "same_interests",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "no-match",
        data: [
          qualities.percentage[0],
          qualities.percentage[2],
          qualities.percentage[4],
          qualities.percentage[6],
          qualities.percentage[8],
          qualities.percentage[10],
        ],
        backgroundColor: "rgba(172, 216, 170, 0.5)",
      },
      {
        label: "high-match",
        data: [
          qualities.percentage[1],
          qualities.percentage[3],
          qualities.percentage[5],
          qualities.percentage[7],
          qualities.percentage[9],
          qualities.percentage[11],
        ],
        backgroundColor: "rgba(231, 143, 142, 0.5)",
      },
    ],
    options: {
      type: "bar",
      data: qualities,
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
}
