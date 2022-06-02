import { useState } from "react";
import Axios from "axios";


function Energija() {
  
  const [leto, setLeto] = useState(0);
  const [proizvodnja, setProizvodnja] = useState(0);

  const [energijaList, setEnergijaList] = useState([]);

  
  const getEnergija = () => {
    Axios.get("http://localhost:3001/stats").then((response) => {
        setEnergijaList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Elektricna energija</h1>
      </div>
      <div className="energija">
        <button onClick={getEnergija}>Elektricna energija</button>

        {energijaList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>leto: {val.leto}</h3>
              
                <h3>proizvodnja: {val.proizvodnja}</h3>
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

export default Energija;