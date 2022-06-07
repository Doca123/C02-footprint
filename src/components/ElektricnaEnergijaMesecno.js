import { useState, useEffect } from "react";
import Axios from "axios";
import LineChart from "./LineChart";
import { energijaMesec } from "../Data";


function ElektricnaEnergijaMesecno() {

    
  const [ElektricnaEnergijaMesecnoList, setElektricnaEnergijaMesecnoList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats10").then((response) => {
        setElektricnaEnergijaMesecnoList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: ElektricnaEnergijaMesecnoList.map((data) => data.Mesec),
    datasets: [
    {
      label: "Lokalno Ogrevanje",
      data: ElektricnaEnergijaMesecnoList.map((data) => data.Proizvodnja),
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


export default ElektricnaEnergijaMesecno;