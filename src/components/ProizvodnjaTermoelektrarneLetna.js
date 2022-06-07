import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaTermoelektrarneLetna() {



    const [proizvodnjaTermoelektrarneLetnaList, setProizvodnjaTermoelektrarneLetnaList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats16").then((response) => {
        setProizvodnjaTermoelektrarneLetnaList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data16={
    labels: proizvodnjaTermoelektrarneLetnaList.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaTermoelektrarneLetnaList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data16} />
              </div>
            </div>
  );
}

export default ProizvodnjaTermoelektrarneLetna;