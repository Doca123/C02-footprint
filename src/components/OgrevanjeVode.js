import { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { EnergijaOgrajevanjeVode } from "../Data";

function OgrevanjeVode() {

  const [OgrevanjeVodeList, setOgrevanjeVodeList] = useState({
    labels: EnergijaOgrajevanjeVode.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: EnergijaOgrajevanjeVode.map((data) => data.lokalno_ogrevanje)
    },
    {
      label: "Centralno Ogrevanje",
      data: EnergijaOgrajevanjeVode.map((data) => data.centralno_ogrevanje)
    },
    {
      label: "Daljinsko Ogrevanje",
      data: EnergijaOgrajevanjeVode.map((data) => data.daljinsko_ogrevanje)
    },
    ],
  });


  return (
    <div className="App">
              <div>
                <BarChart chartData={OgrevanjeVodeList} />
              </div>
    </div>         
  );
}

export default OgrevanjeVode;