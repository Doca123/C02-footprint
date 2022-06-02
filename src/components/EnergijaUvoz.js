import { useState } from "react";
import Axios from "axios";

//proizvodnja=uvoz setProizvodnja=setUvoz energijaList=energijaUvozList  setEnergijaList=setEnergijaUvozList  getEnergija=getEnergijaUvoz

function EnergijaUvoz() {
  
  const [leto, setLeto] = useState(0);
  const [uvoz, setUvoz] = useState("");

  const [energijaUvozList, setEnergijaUvozList] = useState([]);

  
  const getEnergijaUvoz = () => {
    Axios.get("http://localhost:3001/stats2").then((response) => {
        setEnergijaUvozList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Elektricna energija uvoz </h1>

      </div>
      <div className="energija">
        <button onClick={getEnergijaUvoz}>Elektricna energija uvoz</button>

        {energijaUvozList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>leto: {val.leto}</h3>
              
                <h3>Uvoz: {val.uvoz}</h3>
              </div>
              <div>
                

               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EnergijaUvoz;