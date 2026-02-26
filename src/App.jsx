import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import { Analytics } from "@vercel/analytics/react"  
import Roast from './pages/Roast'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/roast/:gender" element={<Roast />} />
      </Routes>
        <Analytics />
    </BrowserRouter>
 
  )
}

export default App