import React from "react";
import participation from "../../data/participation.json";
import { Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart() {
  const data = {
    labels: [
      "fun night out",
      "meet new people",
      "looking for a serious relationship",
      "get a date",
      "other",
      "say I did it",
    ],
    datasets: [
      {
        label: ["high-match"],
        data: [
          participation.percentage[3], // 3.8
          participation.percentage[1], // 5.3
          participation.percentage[5], // .6
          participation.percentage[7], // .3
          participation.percentage[9], // 0
          participation.percentage[11], // 0
        ],
        backgroundColor: "rgba(231, 143, 142, 0.5)",
        borderColor: "rgb(231, 143, 142)",
        borderWidth: 1,
        pointBackgroundColor: "rgb(231, 143, 142)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(231, 143, 142)",
      },
      {
        label: ["no-match"],
        data: [
          participation.percentage[0], // 4.4
          participation.percentage[2], // 4.4
          participation.percentage[4], // 0.5
          participation.percentage[6], // 0.6
          participation.percentage[8], // 0
          participation.percentage[10], // 0
        ],
        backgroundColor: "rgba(172, 216, 170, 0.2)",
        borderColor: "rgb(172, 216, 170)",
        pointBackgroundColor: "rgb(172, 216, 170)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(172, 216, 170)",
      },
    ],
    options: {
      type: "radar",
      data: participation,
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };
  return <Radar data={data} />;
}
