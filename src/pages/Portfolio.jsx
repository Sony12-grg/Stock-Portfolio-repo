import LineChart from "../components/LineChart.jsx";
import BarChart from "../components/BarChart.jsx";
import StockTable from "../components/StockTable.jsx";
export default function Portfolio() {

  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold mb-4'>My Portfolio</h2>
        <StockTable />
        
        {/* For Chart */}
         <div className="grid grid-cols-2 gap-4 my-5">
          <BarChart />
          <LineChart />
      </div>
    </div>
  )
}
