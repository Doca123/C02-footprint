import { useState } from "react";
import Axios from "axios";


function GorivoMednarodni() {

    const [GorivoMednarodniList, setGorivoMednarodniList] = useState([]);

  const getGorivoJavni = () => {
    Axios.get("http://localhost:3001/stats3).then((response) => {
        setGorivoMednarodni(response.data);
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

                <h3>lokalno_ogrevanje: {val.lokalno_ogrevanje}</h3>

                <h3>centralno ogrevanje: {val.centralno_ogrevanje}</h3>

                <h3>daljinsko ogrevanje: {val.daljinsko_ogrevanje}</h3>
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