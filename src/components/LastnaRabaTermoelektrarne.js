import { useEffect, useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";


function LastnaRabaTermoelektrarne() {



    const [lastnaRabaTermoelektrarneList, setLastnaRabaTermoelektrarneList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats13").then((response) => {
        setLastnaRabaTermoelektrarneList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data13={
    labels: lastnaRabaTermoelektrarneList.map((data) => data.leto),
    datasets: [
    {
      label: "Lastna raba",
      data: lastnaRabaTermoelektrarneList.map((data) => data.lastna_raba),
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
                <BarChart chartData={data13} />
              </div>
            </div>
  );
}

export default LastnaRabaTermoelektrarne;