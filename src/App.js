import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Person from './components/person'
import Transport from "./components/transport";
import Home from "./components/home";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">

<BrowserRouter>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="person" element={<Person />} />
          <Route path="transport" element={<Transport />} />
          </Routes>
    </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App
