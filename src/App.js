import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Person from './components/person'
import Transport from "./components/transport";
import Home from "./components/home";
import Buildings from "./components/buildings";
import About from "./components/About";
import Energija from "./components/Energija";
import EnergijaUvoz from "./components/EnergijaUvoz";
import OgrevanjeProstorov from "./components/OgrajevanjeProstorov";
import OgrevanjeVode from "./components/OgrevanjeVode";
import GorivoCestni from "./components/GorivoCestni";
import LastnaRaba from "./components/LastnaRaba";
import ElektricnaEnergijaIzvoz from "./components/ElektricnaEnergijaIzvoz";
import GorivoMedkrajevni from "./components/GorivoMedkrajevni";
import GorivoMednarodni from "./components/GorivoMednarodni";
import ElektricnaEnergijaMesecno from "./components/ElektricnaEnergijaMesecno";
import LastnaRabaHidroelektrarne from "./components/LastnaRabaHidroelektrarne";
import LastnaRabaJedrske from "./components/LastnaRabaJedrske";
import LastnaRabaTermoelektrarne from "./components/LastnaRabaTermoelektrarne";
import ProizvodnjaJedrskeLetna from "./components/ProizvodnjaJedrskeLetna";
import ProizvodnjaTermoelektrarneLetna from "./components/ProizvodnjaTermoelektrarneLetna";
import ProizvodnjaHidroelektrarneMesecna from "./components/ProizvodnjaHidroelektrarneMesecna";
import ProizvodnjaJedrskeMesecna from "./components/ProizvodnjaJedrskeMesecna";
import ProizvodnjaTermoelektrarneMesecna from "./components/ProizvodnjaTermoelektrarneMesecna";
import ProizvodnjaNaPragu from "./components/ProizvodnjaNaPragu";


function App() {

  return (
    <div className="main">
      <Sidebar />
      <div className="container">

<BrowserRouter>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="stats" element={<Energija />} />
          <Route path="stats10" element={<ElektricnaEnergijaMesecno />} />
          <Route path="stats2" element={<EnergijaUvoz />} />
          <Route path="stats7" element={<ElektricnaEnergijaIzvoz />} />
          <Route path="stats3" element={<OgrevanjeProstorov />} />
          <Route path="stats4" element={<OgrevanjeVode />} />
          <Route path="stats5" element={<GorivoCestni />} />
          <Route path="stats8" element={<GorivoMedkrajevni />} />
          <Route path="stats9" element={<GorivoMednarodni />} />
          <Route path="stats6" element={<LastnaRaba />} />
          <Route path="stats11" element={<LastnaRabaHidroelektrarne />} />
          <Route path="stats12" element={<LastnaRabaJedrske />} />
          <Route path="stats13" element={<LastnaRabaTermoelektrarne />} />
          <Route path="stats15" element={<ProizvodnjaJedrskeLetna />} />
          <Route path="stats16" element={<ProizvodnjaTermoelektrarneLetna />} />
          <Route path="stats17" element={<ProizvodnjaHidroelektrarneMesecna />} />
          <Route path="stats18" element={<ProizvodnjaJedrskeMesecna />} />
          <Route path="stats19" element={<ProizvodnjaTermoelektrarneMesecna />} />
          <Route path="stats20" element={<ProizvodnjaNaPragu />} />
          <Route path="person" element={<Person />} />
          <Route path="buildings" element={<Buildings />} />
          <Route path="transport" element={<Transport />} />
          <Route path="about" element={<About />} />
          </Routes>
    </BrowserRouter>
        
      </div>
    </div>
  )
}

export default App
