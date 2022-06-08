import { useEffect, useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";


function ElektricnaEnergijaIzvoz() {

  const [ElektricnaEnergijaIzvozList, setElektricnaEnergijaIzvozList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats7").then((response) => {
      setElektricnaEnergijaIzvozList(response.data);
    });
  };

  useEffect(() => {
    fetchData();  
  }, []);

  const data1={
    labels: ElektricnaEnergijaIzvozList.map((data) => data.leto),
    datasets: [
    {
      label: "Elektricna energija izvoz",
      data: ElektricnaEnergijaIzvozList.map((data) => data.izvoz),
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

export default ElektricnaEnergijaIzvoz;