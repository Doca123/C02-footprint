import { useState } from "react";
import Axios from "axios";


function GorivoCestni() {
  

  const [GorivoCestniList, setGorivoCestniList] = useState([]);

  
  const getGorivoCestni = () => {
    Axios.get("http://localhost:3001/stats5").then((response) => {
        setGorivoCestniList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Gorivo cestni</h1>
      </div>
      <div className="energija">
        <button onClick={getGorivoCestni}>Gorivo cestni</button>

        {GorivoCestniList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>Prevozeni kilometri: {val.prevozeni_kilometri}</h3>
              
                <h3>leto: {val.leto}</h3>

                <h3>Gorivo: {val.gorivo}</h3>

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

export default GorivoCestni;