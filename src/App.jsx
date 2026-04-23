import React from 'react'
import Portfolio from './pages/Portfolio.jsx'
import { Routes, Route } from 'react-router-dom'
import StockFormEdit from './components/StockFormEdit.jsx'
import AddStock from './components/AddStock.jsx'

export default function App() {
  return (
    <div className='p-5'>
       <h1 className="text-3xl font-bold ">
        Stock Portfolio App</h1>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/add-stock" element={AddStock()} />
          <Route path="/edit-stock/:id" element={<StockFormEdit />} />

        </Routes>
        
      
    </div>
  )
}
