import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/mockData.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: "Stock Price Trend",
        data: data.map(d => d.price),
        borderColor: "blue",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="h-80">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;