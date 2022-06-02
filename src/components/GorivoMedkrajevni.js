import { useState } from "react";
import Axios from "axios";


function GorivoMedkrajevni() {

    const [GorivoMedkrajevniList, setGorivoMedkrajevniList] = useState([]);

  const getGorivoMedkrajevni = () => {
    Axios.get("http://localhost:3001/stats3).then((response) => {
        setGorivoMedkrajevni(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">

       <h1>Izpis - Gorivo Medkrajevni prevoz</h1>
      </div>
      <div className="energija">
        <button onClick={getGorivoMedkrajevni}>Gorivo medkrajevni prevoz</button>

        {GorivoJavniList.map((val, key) => {
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

export default GorivoMedkrajevni;