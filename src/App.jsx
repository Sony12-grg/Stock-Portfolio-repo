import React from 'react'
import Portfolio from './pages/Portfolio.jsx'
import { Routes, Route } from 'react-router-dom'
import StockFormEdit from './components/StockFormEdit.jsx'
import AddStock from './components/AddStock.jsx'

export default function App() {
  return (
    <div className='p-5 min-h-screen bg-gray-950'>
       <h1 className="text-2xl font-bold font-mono text-white bg-gray-900 border-b border-gray-800 px-6 py-4">
        Stock Portfolio App</h1>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/add-stock" element={<AddStock/>} />
          <Route path="/edit-stock/:id" element={<StockFormEdit />} />

        </Routes>
        
      
    </div>
  )
}
