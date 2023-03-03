import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

import barData from "../data/barchart.json";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function App() {
  // console.log(barData); // checking the data.

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
        label: ["no match"],
        data: [
          barData.percentage[0],
          barData.percentage[2],
          barData.percentage[4],
          barData.percentage[6],
          barData.percentage[8],
          barData.percentage[10],
        ],
        backgroundColor: "rgba(172, 216, 170, 0.2)",
        borderColor: "rgb(172, 216, 170)",
        pointBackgroundColor: "rgb(172, 216, 170)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(172, 216, 170)",
      },
      {
        label: ["high match"],
        data: [
          barData.percentage[1],
          barData.percentage[3],
          barData.percentage[5],
          barData.percentage[7],
          barData.percentage[9],
          barData.percentage[11],
        ],
        backgroundColor: "rgba(231, 143, 142)",
        borderColor: "rgb(231, 143, 142)",
        borderWidth: 1,
        pointBackgroundColor: "rgb(231, 143, 142)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(231, 143, 142)",
      },
    ],
    options: {
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  };
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Radar data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
