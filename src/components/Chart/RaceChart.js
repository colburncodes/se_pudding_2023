// import React from "react";
// import selfgrading from "../../data/selfgrading.json";
// import {Bar} from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   RadialLinearScale,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );

// export function RaceChart() {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "right",
//       },
//       title: {
//         display: true,
//         text: "Race",
//       },
//     },
//   };
//   const labels = [
//     "European/Caucasian-American",
//     "Asian/Pacific Islander/Asian-American",
//     "Latino/Hispanic American",
//     "Black/African",
//     "Other",
    
//   ];

//   const data = {
//     datasets: [
//       {
//         label: "European/Caucasian-American",
//         data: [
         
//         ],
//         backgroundColor: "rgba(172, 216, 170, 0.5)",
//       },
//       {
//         label: "Asian/Pacific Islander/Asian-American",
//         data: [
          
//         ],
//         backgroundColor: "rgba(231, 143, 142, 0.5)",
//       },
//       {
//         label: "Latino/Hispanic American",
//         data: [
          
//         ],
//         backgroundColor: "rgba(255, 230, 232, 0.5)",
//       },
//       {
//         label: "Black/African",
//         data: [
          
//         ],
//         backgroundColor: "rgba(242, 204, 195, 0.5)",
//       },
//       {
//         label: "Other",
//         data: [
          
//         ],
//         backgroundColor: "rgba(244, 132, 152, 0.5)",
//       },
//     ],
//     options: {
//       type: "pie",
//       data: selfgrading,
//       elements: {
//         line: {
//           borderWidth: 3,
//         },
//       },
//     },
//   };

//   return <Bar options={options} data={data} />;
// }


import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import race from "../../data/race.json";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
  'European/Caucasian-American', 
  'Asian/Pacific Islander/Asian-American',
  'Latino/Hispanic American', 
  'Black/African', 
  'Others',],
  datasets: [
    {
      label: '',
      data: [
        race.percentage[0],
        race.percentage[1],
        race.percentage[2],
        race.percentage[3],
        race.percentage[4],
      ],
      backgroundColor: [
        'rgba(172, 216, 170, 0.5)',
        "rgba(231, 143, 142, 0.5)",
        "rgba(255, 230, 232, 0.5)",
        "rgba(242, 204, 195, 0.5)",
        "rgba(244, 132, 152, 0.5)"
      ],
      borderColor: [
        'rgba(172, 216, 170, 0.5)',
        "rgba(231, 143, 142, 0.5)",
        "rgba(255, 230, 232, 0.5)",
        "rgba(242, 204, 195, 0.5)",
        "rgba(244, 132, 152, 0.5)"
      ],
      borderWidth: 1,
    },
  ],
};

export function RaceChart() {
  return <Pie data={data} />;
}
