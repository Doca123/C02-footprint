import { useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { DelezEnergijeZaOgrajevanjeProstorov } from "../Data";

function OgrevanjeProstorov() {
  

  const [OgrevanjeProstorovList, setOgrevanjeProstorovList] = useState({
    labels: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.lokalno_ogrevanje)
    },
    {
      label: "Centralno Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.centralno_ogrevanje)
    },
    {
      label: "Daljinsko Ogrevanje",
      data: DelezEnergijeZaOgrajevanjeProstorov.map((data) => data.daljinsko_ogrevanje)
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