import { useState } from "react";
import Axios from "axios";


function GorivoMednarodni() {

    const [GorivoMednarodniList, setGorivoMednarodniList] = useState([]);

    const getGorivoMednarodni = () => {
      Axios.get("http://localhost:3001/stats9").then((response) => {
          setGorivoMednarodniList(response.data);
      });
    };


  return (
    <div className="App">
      <div className="information">

       <h1>Izpis - Gorivo Mednarodni prevoz</h1>
      </div>
      <div className="energija">
        <button onClick={getGorivoMednarodni}>Gorivo mednarodni prevoz</button>

        {GorivoMednarodniList.map((val, key) => {
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

export default GorivoMednarodni;