import { useEffect, useState } from "react";
import Axios from "axios";
import BarChart from "./BarChart";


function OgrevanjeProstorov() {



    const [OgrevanjeProstorovList, setOgrevanjeProstorovList] = useState([]);




  const fetchData = () => {
    Axios.get("http://localhost:3001/stats3").then((response) => {
        setOgrevanjeProstorovList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data1={
    labels: OgrevanjeProstorovList.map((data) => data.leto),
    datasets: [
    {
      label: "Lokalno ogrevanje",
      data: OgrevanjeProstorovList.map((data) => data.lokalno_ogrevanje),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    {
      label: "Centralno Ogrevanje",
      data: OgrevanjeProstorovList.map((data) => data.centralno_ogrevanje),
      backgroundColor: [
        "rgba(75,192,192,1)"  
      ],
      borderColor: "black",
      borderWidth: 2,

    },
    {
      label: "Daljinsko Ogrevanje",
      data: OgrevanjeProstorovList.map((data) => data.daljinsko_ogrevanje),
      backgroundColor: [
        "rgba(255, 204, 0)"
        
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

export default OgrevanjeProstorov;