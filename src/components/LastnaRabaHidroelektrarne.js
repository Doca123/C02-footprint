import { useEffect, useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";


function LastnaRabaHidroelektrarne() {



    const [lastnaRabaHidroelektrarneList, setLastnaRabaHidroelektrarneList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats11").then((response) => {
      setLastnaRabaHidroelektrarneList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data11={
    labels: lastnaRabaHidroelektrarneList.map((data) => data.leto),
    datasets: [
    {
      label: "Lastna raba",
      data: lastnaRabaHidroelektrarneList.map((data) => data.lastna_raba),
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
                <BarChart chartData={data11} />
              </div>
            </div>
  );
}

export default LastnaRabaHidroelektrarne;