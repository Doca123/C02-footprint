import { useState } from "react";
import Axios from "axios";


function ElektricnaEnergijaMesecno() {

    const [ElektricnaEnergijaMesecnoList, setElektricnaEnergijaMesecnoList] = useState([]);

    const getElektricnaEnergijaMesecno = () => {
      Axios.get("http://localhost:3001/stats10").then((response) => {
          setElektricnaEnergijaMesecnoList(response.data);
      });
    };


  return (
    <div className="App">
      <div className="information">

       <h1>Izpis -  Elektricna Energija Mesecno</h1>
      </div>
      <div className="energija">
        <button onClick={getElektricnaEnergijaMesecno}> Elektricn aEnergija Mesecno</button>

        {ElektricnaEnergijaMesecnoList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>

                <h3>Mesec: {val.Mesec}</h3>

                <h3>Proizvodnja: {val.Proizvodnja}</h3>

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

export default ElektricnaEnergijaMesecno;