import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteStock } from "../redux/stockSlice.js";
import { Link } from "react-router-dom";
export default function StockTable() {
    const stocks = useSelector(state => state.stocks.stocks);
  const dispatch = useDispatch();
  return (
    <div>
       <div className='overflow-x-auto'>
        <Link to="/add-stock" className='mb-4'>
           <button className='bg-green-500 text-white px-4 py-2 rounded mb-3'> + Add Stock</button>
        </Link>
         <table className='min-w-full border-gray-300'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='p-2'>Ticker</th>
              <th className='p-2'>Company</th>
              <th className='p-2'>Quantity</th>
              <th className='p-2'>Buy Price</th>
              <th className='p-2'>Current Price</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              stocks.map((stock) => (
                <tr key={stock.id} className='text-center border-t border-gray-500'>
                  <td className='p-2'>{stock.ticker}</td>
                  <td className='p-2'>{stock.name}</td>
                  <td className='p-2'>{stock.qty}</td>
                  <td className='p-2'>${stock.buy.toFixed(2)}</td>
                  <td className='p-2'>${stock.current.toFixed(2)}</td>
                  <td className='p-2'>
                    <Link to={`/edit-stock/${stock.id}`}>
                      <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>Edit</button>
                    </Link>
                    <button
                        onClick={() => dispatch(deleteStock(stock.id))}
                     className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
         </table>
      </div>
    </div>
  )
}
