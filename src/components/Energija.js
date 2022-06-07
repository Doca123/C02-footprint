import { useState, useEffect } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { energijaLetno } from "../Data";

function Energija() {
  
  const [EnergijaList, setEnergijaList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats").then((response) => {
        setEnergijaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: EnergijaList.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: EnergijaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data1} />
              </div>
            </div>
  );
}

export default Energija;