import { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { energijaIzvoz } from "../Data";

function ElektricnaEnergijaIzvoz() {

    const [ElektricnaEnergijaIzvozList, setElektricnaEnergijaIzvozList] = useState({
      labels: energijaIzvoz.map((data) => data.leto),
      datasets: [
      {
        label: "Izvoz",
        data: energijaIzvoz.map((data) => data.izvoz),
        backgroundColor: [
          "rgba(75,192,192,1)"
          
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      ],
    });

  return (
    <div className="App">
              <div>
              <BarChart chartData={ElektricnaEnergijaIzvozList} />

      </div>
    </div>
  );
}

export default ElektricnaEnergijaIzvoz;