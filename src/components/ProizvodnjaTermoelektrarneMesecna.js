import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaTermoelektrarneMesecna() {



    const [proizvodnjaTermoelektrarneMesecnaList, setProizvodnjaTermoelektrarneMesecnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats19").then((response) => {
        setProizvodnjaTermoelektrarneMesecnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data19={
    labels: proizvodnjaTermoelektrarneMesecnaList.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaTermoelektrarneMesecnaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data19} />
              </div>
            </div>
  );
}

export default ProizvodnjaTermoelektrarneMesecna;