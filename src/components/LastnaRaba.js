import { useState } from "react";
import Axios from "axios";


function LastnaRaba() {
  

  const [LastnaRabaList, setLastnaRabaList] = useState([]);

  
  const getLastnaRaba = () => {
    Axios.get("http://localhost:3001/stats6").then((response) => {
        setLastnaRabaList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Lastna raba elektricne energije</h1>
      </div>
      <div className="energija">
        <button onClick={getLastnaRaba}>Lastna raba</button>

        {LastnaRabaList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>leto: {val.leto}</h3>
              
                <h3>Lastna raba: {val.lastna_raba}</h3>
              </div>
              <div>
                

               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastnaRaba;