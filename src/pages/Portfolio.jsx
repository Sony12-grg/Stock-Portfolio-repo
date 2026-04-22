import React from 'react'

export default function Portfolio() {
  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold mb-4'>My Portfolio</h2>
      <div className='overflow-x-auto'>
        <button className='bg-green-500 text-white px-4 py-2 rounded mb-3'>Add Stock</button>
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
              [
                {ticker: "AAPL", name: "Apple", qty:10, buy: 100, current:120},
                {ticker: "GOOGL", name: "Alphabet", qty:5, buy: 1500, current: 1800},
              ].map((stock, index) => (
                <tr key={index} className='text-center border-t border-gray-500'>
                  <td className='p-2'>{stock.ticker}</td>
                  <td className='p-2'>{stock.name}</td>
                  <td className='p-2'>{stock.qty}</td>
                  <td className='p-2'>${stock.buy.toFixed(2)}</td>
                  <td className='p-2'>${stock.current.toFixed(2)}</td>
                  <td className='p-2'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>Edit</button>
                    <button className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
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
