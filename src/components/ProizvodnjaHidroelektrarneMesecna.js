import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaHidroelektrarneMesecna() {



    const [proizvodnjaHidroelektrarneMesecnaList, setProizvodnjaHidroelektrarneMesecnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats17").then((response) => {
        setProizvodnjaHidroelektrarneMesecnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data17={
    labels: proizvodnjaHidroelektrarneMesecnaList.map((data) => data.mesec),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaHidroelektrarneMesecnaList.map((data) => data.proizvodnja),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    }
    ],
  };

  return (
    <div className="App">
              <div>
                <LineChart chartData={data17} />
              </div>
            </div>
  );
}

export default ProizvodnjaHidroelektrarneMesecna;