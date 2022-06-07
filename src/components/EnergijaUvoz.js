import { useState, useEffect } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { energijaUvoz } from "../Data";

function EnergijaUvoz() {

  const [EnergijaUvozList, setEnergijaUvozList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats2").then((response) => {
      setEnergijaUvozList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  const data1={
    labels: EnergijaUvozList.map((data) => data.leto),
    datasets: [
    {
      label: "Energija uvoz",
      data: EnergijaUvozList.map((data) => data.uvoz),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    ],
  };

  return (
    <div className="App">
              <div>
                <BarChart chartData={data1} />
              </div>
            </div>
  );
}
export default EnergijaUvoz;