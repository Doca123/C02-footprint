import { useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { energijaMesec } from "../Data";


function ElektricnaEnergijaMesecno() {

    const [ElektricnaEnergijaMesecnoList, setElektricnaEnergijaMesecnoList] = useState({
      labels: energijaMesec.map((data) => data.Mesec),
      datasets: [
      {
        label: "Proizvodnja",
        data: energijaMesec.map((data) => data.Proizvodnja),
        backgroundColor: [
          "rgb(153, 255, 102)"
          
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      ],
    });


  return (
    <div className="App">
              <div>
              <LineChart chartData={ElektricnaEnergijaMesecnoList} />

              </div>
    </div>
  );
}

export default ElektricnaEnergijaMesecno;