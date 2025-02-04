import { useState, useEffect } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { gorivoMednarodniPrevoz } from "../Data";

function GorivoMednarodni() {

  const [GorivoMednarodniList, setGorivoMednarodniList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats9").then((response) => {
      setGorivoMednarodniList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: GorivoMednarodniList.map((data) => data.leto),
    datasets: [
    {
      label: "Gorivo",
      data: GorivoMednarodniList.map((data) => data.gorivo),
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
export default GorivoMednarodni;