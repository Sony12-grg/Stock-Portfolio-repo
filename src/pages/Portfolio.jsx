import LineChart from "../components/LineChart.jsx";
import BarChart from "../components/BarChart.jsx";
import StockTable from "../components/StockTable.jsx";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-stone-50 min-h-screen">
      
      {/* Header */}
      <header className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-200">
        <h2 className="text-2xl font-semibold text-gray-900">
          My Portfolio
        </h2>
        <span className="text-xs font-bold uppercase bg-green-100 text-green-800 px-3 py-1 rounded-full">
          Live
        </span>
      </header>

      {/* Stock Table */}
      <section className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-5">
        <StockTable />
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4">
          <p className="text-xs uppercase text-gray-400 mb-3">
            Volume Overview
          </p>
          <BarChart />
        </div>
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4">
          <p className="text-xs uppercase text-gray-400 mb-3">
            Price Trend
          </p>
          <LineChart />
        </div>
      </section>

    </div>
  );
}