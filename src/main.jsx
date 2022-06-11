import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Diet from './pages/diet/Diet'
import Home from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="diet" element={<Diet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
