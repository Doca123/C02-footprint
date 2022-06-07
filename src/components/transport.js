import { transportation } from "../Data";
import PieChart from "./PieChart";

const transport={
    labels: transportation.map((data) => data.type),
    datasets: [
    {
      label: "Percent",
      data: transportation.map((data) => data.percent),
      backgroundColor: [
        "rgb(153, 255, 102)"
        
      ],
      borderColor: "black",
      borderWidth: 2,
    }
    ],
  };

const Transport = () => {
    return (
        <div style={{ width: 500 }}><h2 className="subtitle">Average transport CO2 footprint</h2>
        <p className="info">Slovenia CO2 Emissions for transport is -- 5 033 642 tons.</p>
        <PieChart chartData={transport} />
        </div>
    )
    
};
  
  export default Transport;