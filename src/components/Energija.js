import { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { energijaLetno } from "../Data";

function Energija() {
  
  const [energijaList, setEnergijaList] = useState({
    labels: energijaLetno.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: energijaLetno.map((data) => data.proizvodnja)
    },
    ],
  });

  return (
    <div className="App">
              <div>
              <BarChart chartData={energijaList} />
      </div>
    </div>
  );
}

export default Energija;