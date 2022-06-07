import { useState, useEffect } from "react";
import Axios from "axios";
import BarChart from "./BarChart";
import { gorivoMedkrajevniPrevoz } from "../Data";

function GorivoMedkrajevni() {


  const [GorivoMedkrajevniList, setGorivoMedkrajevniList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats8").then((response) => {
      setGorivoMedkrajevniList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: GorivoMedkrajevniList.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: GorivoMedkrajevniList.map((data) => data.gorivo),
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
export default GorivoMedkrajevni;