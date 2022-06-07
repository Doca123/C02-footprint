import { useState, useEffect } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { gorivoCestniPrevoz } from "../Data";

function GorivoCestni() {

  const [GorivoCestniList, setGorivoCestniList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats5").then((response) => {
      setGorivoCestniList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: GorivoCestniList.map((data) => data.leto),
    datasets: [
    {
      label: "Gorivo",
      data: GorivoCestniList.map((data) => data.gorivo),
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

export default GorivoCestni;