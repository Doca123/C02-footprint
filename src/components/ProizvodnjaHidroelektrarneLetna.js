import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaHidroelektrarneLetna() {



    const [proizvodnjaHidroelektrarneLetnaList, setProizvodnjaHidroelektrarneLetnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats14").then((response) => {
        setProizvodnjaHidroelektrarneLetnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data14={
    labels: proizvodnjaHidroelektrarneLetnaList.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaHidroelektrarneLetnaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data14} />
              </div>
            </div>
  );
}

export default ProizvodnjaHidroelektrarneLetna;