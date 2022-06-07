import { useEffect, useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";


function LastnaRabaJedrske() {



    const [lastnaRabaJedrskeList, setLastnaRabaJedrskeList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats12").then((response) => {
        setLastnaRabaJedrskeList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data12={
    labels: lastnaRabaJedrskeList.map((data) => data.leto),
    datasets: [
    {
      label: "Lastna raba",
      data: lastnaRabaJedrskeList.map((data) => data.lastna_raba),
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
                <BarChart chartData={data12} />
              </div>
            </div>
  );
}

export default LastnaRabaJedrske;