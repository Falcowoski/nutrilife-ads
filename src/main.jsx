import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Comments from './pages/comments/Comments'
import Diet from './pages/diet/Diet'
import Home from './pages/home/Home'
import Terms from './pages/terms/Terms'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="diet" element={<Diet />} />
          <Route path="terms" element={<Terms />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
