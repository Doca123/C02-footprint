import { useEffect, useState } from "react";
import Axios from "axios";
import LineChart from "./LineChart";


function ProizvodnjaNaPragu() {



    const [proizvodnjaNaPraguList, setProizvodnjaNaPraguList] = useState([]);

  const fetchData = () => {
    Axios.get("http://localhost:3001/stats20").then((response) => {
        setProizvodnjaNaPraguList(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    
  }, []);



  const data20={
    labels: proizvodnjaNaPraguList.map((data) => data.leto),
    datasets: [
    {
      label: "Proizvodnja",
      data: proizvodnjaNaPraguList.map((data) => data.proizvodnja),
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
                <LineChart chartData={data20} />
              </div>
            </div>
  );
}

export default ProizvodnjaNaPragu;