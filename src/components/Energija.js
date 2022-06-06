import { useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { energijaLetno } from "../Data";

function Energija() {
  
  const [energijaList, setEnergijaList] = useState({
    labels: energijaLetno.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: energijaLetno.map((data) => data.proizvodnja),
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
              <LineChart chartData={energijaList} />
      </div>
    </div>
  );
}

export default Energija;