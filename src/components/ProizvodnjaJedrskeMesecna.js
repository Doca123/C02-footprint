import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaJedrskeMesecna() {



    const [proizvodnjaJedrskeMesecnaList, setProizvodnjaJedrskeMesecnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats18").then((response) => {
        setProizvodnjaJedrskeMesecnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data18={
    labels: proizvodnjaJedrskeMesecnaList.map((data) => data.mesec),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaJedrskeMesecnaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data18} />
              </div>
            </div>
  );
}

export default ProizvodnjaJedrskeMesecna;