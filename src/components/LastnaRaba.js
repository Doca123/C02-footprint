import { useState, useEffect } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { lastnaRabaEnergija } from "../Data";


function LastnaRaba() {
  


  const [LastnaRabaList, setLastnaRabaList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats6").then((response) => {
      setLastnaRabaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: LastnaRabaList.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: LastnaRabaList.map((data) => data.lastna_raba),
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

export default LastnaRaba;