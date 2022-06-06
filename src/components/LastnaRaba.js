import { useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { lastnaRabaEnergija } from "../Data";


function LastnaRaba() {
  

  const [LastnaRabaList, setLastnaRabaList] = useState({
    labels: lastnaRabaEnergija.map((data) => data.leto),
    datasets: [
    {
      label: "Lastna Raba",
      data: lastnaRabaEnergija.map((data) => data.lastna_raba),
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
              <LineChart chartData={LastnaRabaList} />

      </div>
    </div>
  );
}

export default LastnaRaba;