import { trendData } from "../data/mockData";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: trendData.map(d => d.date),
    datasets: [
      {
        label: "Stock Price Trend",
        data: trendData.map(d => d.price),
        borderColor: "blue",
        tension: 0.3
      }
    ]
  };

  return (
    <div className="h-80">
      <Line data={data} />
    </div>
  );
};

export default LineChart;