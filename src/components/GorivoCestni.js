import { useState } from "react";
import Axios from "axios";
import PieChart from "./PieChart";
import { gorivoCestniPrevoz } from "../Data";

function GorivoCestni() {

  const [GorivoCestniList, setGorivoCestniList] = useState({
    labels: gorivoCestniPrevoz.map((data) => data.leto),
    datasets: [
    {
      label: "Gorivo na 1000km",
      data: gorivoCestniPrevoz.map((data) => data.gorivo),
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
              <div style={{ width: 650 }}>
              <PieChart chartData={GorivoCestniList} />
 
      </div>
    </div>
  );
}

export default GorivoCestni;