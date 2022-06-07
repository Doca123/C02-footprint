import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaJedrskeLetna() {



    const [proizvodnjaJedrskeLetnaList, setProizvodnjaJedrskeLetnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats15").then((response) => {
        setProizvodnjaJedrskeLetnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data15={
    labels: proizvodnjaJedrskeLetnaList.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaJedrskeLetnaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data15} />
              </div>
            </div>
  );
}

export default ProizvodnjaJedrskeLetna;