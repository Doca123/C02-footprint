import { useState } from "react";
import Axios from "axios";
import PieChart from "./PieChart";
import { gorivoMednarodniPrevoz } from "../Data";

function GorivoMednarodni() {

    const [GorivoMednarodniList, setGorivoMednarodniList] = useState({
      labels: gorivoMednarodniPrevoz.map((data) => data.leto),
      datasets: [
      {
        label: "Gorivo na 1000km",
        data: gorivoMednarodniPrevoz.map((data) => data.gorivo),
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
              <PieChart chartData={GorivoMednarodniList} />

      </div>
    </div>
  );
}

export default GorivoMednarodni;