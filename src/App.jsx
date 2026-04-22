import React from 'react'
import Portfolio from './pages/Portfolio.jsx'
import { Routes, Route } from 'react-router-dom'
import stockform from './components/stockForm.jsx'
import StockFormEdit from './components/stockEdit.jsx'

export default function App() {
  return (
    <div className='p-5'>
       <h1 className="text-3xl font-bold ">
        Stock Portfolio App</h1>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/add-stock" element={stockform()} />
          <Route path="/edit-stock/:id" element={<StockFormEdit />} />
        </Routes>
      
    </div>
  )
}
