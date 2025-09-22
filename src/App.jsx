import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css";

export default function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
     </Router>
    </div>
  )
}
