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
      data: EnergijaOgrajevanjeVode.map((data) => data.lokalno_ogrevanje),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "Centralno Ogrevanje",
      data: EnergijaOgrajevanjeVode.map((data) => data.centralno_ogrevanje),
      backgroundColor: [
        "rgba(75,192,192,1)"  
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "Daljinsko Ogrevanje",
      data: EnergijaOgrajevanjeVode.map((data) => data.daljinsko_ogrevanje),
      backgroundColor: [
        "rgba(255, 204, 0)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
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