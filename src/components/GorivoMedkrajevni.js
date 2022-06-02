import { useState } from "react";
import Axios from "axios";


function GorivoMedkrajevni() {

    const [GorivoMedkrajevniList, setGorivoMedkrajevniList] = useState([]);

    const getGorivoMedkrajevni = () => {
      Axios.get("http://localhost:3001/stats8").then((response) => {
          setGorivoMedkrajevniList(response.data);
      });
    };



  return (
    <div className="App">
      <div className="information">

       <h1>Izpis - Gorivo Medkrajevni prevoz</h1>
      </div>
      <div className="energija">
        <button onClick={getGorivoMedkrajevni}>Gorivo medkrajevni prevoz</button>

        {GorivoMedkrajevniList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>

                <h3>leto: {val.leto}</h3>


                <h3>Gorivo: {val.gorivo}</h3>
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

export default GorivoMedkrajevni;