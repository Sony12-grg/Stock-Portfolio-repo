import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const BarChart = () => {
  const stocks = useSelector(state => state.stocks.stocks);

  const data = {
    labels: stocks.map(s => s.ticker),
    datasets: [
      {
        label: "Gain / Loss",
        data: stocks.map(s => s.current - s.buy),
        backgroundColor: stocks.map(s =>
          s.current - s.buy >= 0 ? "green" : "red"
        )
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="w-full h-80 bg-white p-3 shadow rounded">
      <h3 className="text-lg font-semibold mb-2">Gain / Loss</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;