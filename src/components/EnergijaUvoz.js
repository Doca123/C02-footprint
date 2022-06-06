import { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { energijaUvoz } from "../Data";

function EnergijaUvoz() {

  const [energijaUvozList, setEnergijaUvozList] = useState({
    labels: energijaUvoz.map((data) => data.leto),
    datasets: [
    {
      label: "Uvoz",
      data: energijaUvoz.map((data) => data.uvoz),
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
              <BarChart chartData={energijaUvozList} />

      </div>
    </div>
  );
}

export default EnergijaUvoz;