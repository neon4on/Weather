// TemperatureChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function TemperatureChart({ temperatureData }) {
  const data = {
    labels: temperatureData.map((data) => data.date),
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData.map((data) => data.temperature),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperature Chart',
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default TemperatureChart;
