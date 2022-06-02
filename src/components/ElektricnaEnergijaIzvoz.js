import { useState } from "react";
import Axios from "axios";


function ElektricnaEnergijaIzvoz() {

    const [ElektricnaEnergijaIzvozList, setElektricnaEnergijaIzvozList] = useState([]);

    const getElektricnaEnergijaIzvoz = () => {
      Axios.get("http://localhost:3001/stats7").then((response) => {
          setElektricnaEnergijaIzvozList(response.data);
      });
    };


  return (
    <div className="App">
      <div className="information">

       <h1>Izpis - Elektricna Energija Izvoz</h1>
      </div>
      <div className="energija">
        <button onClick={getElektricnaEnergijaIzvoz}>Elektricna Energija Izvoz</button>

        {ElektricnaEnergijaIzvozList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>

                <h3>leto: {val.leto}</h3>

                
                <h3>Izvoz: {val.izvoz}</h3>
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

export default ElektricnaEnergijaIzvoz;