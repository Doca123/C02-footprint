import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Person from './components/person'
import Transport from "./components/transport";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
      <h1 className="title">CO2-footprint</h1>
<BrowserRouter>
      <Routes>
          <Route path="person" element={<Person />} />
          <Route path="transport" element={<Transport />} />
          </Routes>
    </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App
