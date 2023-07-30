/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio:false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'top titel',
    },
  },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

const data = {
   
  labels,
  datasets: [
    {
      label: 'income',
      data: [12,3,4,5,4,5,66,6,3,4,5,5],
      backgroundColor: 'rgba(25, 199, 132, 0.5)',
    },
    {
      label: 'Guest',
      data: [12,3,4,5,4,5,6,6,3,4,5,5],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const BarChart = () => {
  return (
     <Bar options={options} data={data} />
  )
}

export default BarChart