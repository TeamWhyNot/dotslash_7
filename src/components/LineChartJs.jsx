import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const LineChartRevenue = ({ chartData, max }) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: chartData,
        backgroundColor: "black",
        borderColor: "#FF9800",
        pointBorderColor: "black",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        min: 0,
        max: max,
        grid: {
          display: true,
        },
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 3,
  };

  return <Line data={data} options={options} className="w-full"></Line>;
};

export default LineChartRevenue;
