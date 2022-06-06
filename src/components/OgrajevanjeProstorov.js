import { useState } from "react";
import BarChart from "./BarChart";
import { DelezEnergijeZaOgrajevanjeProstorov } from "../Data";

function OgrevanjeProstorov() {
  

  const [OgrevanjeProstorovList, setOgrevanjeProstorovList] = useState({
    labels: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.lokalno_ogrevanje),
      backgroundColor: [
        "rgba(75,192,192,1)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "Centralno Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.centralno_ogrevanje),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,

    },
    {
      label: "Daljinsko Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.daljinsko_ogrevanje),
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
                <BarChart chartData={OgrevanjeProstorovList} />
              </div>
            </div>
          );
}

export default OgrevanjeProstorov;