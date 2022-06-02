import { useState } from "react";
import Axios from "axios";


function OgrevanjeProstorov() {
  
  
  const [OgrevanjeProstorovList, setOgrevanjeProstorovList] = useState([]);

  
  const getOgrevanjeProstorov = () => {
    Axios.get("http://localhost:3001/stats3").then((response) => {
        setOgrevanjeProstorovList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Delez energije za ograjevanje prostorov</h1>
      </div>
      <div className="energija">
        <button onClick={getOgrevanjeProstorov}>Ogrevanje prostorov</button>

        {OgrevanjeProstorovList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>Leto: {val.leto}</h3>
              
                <h3>Lokalno_ogrevanje: {val.lokalno_ogrevanje}</h3>

                <h3>Centralno ogrevanje: {val.centralno_ogrevanje}</h3>

                <h3>Daljinsko ogrevanje: {val.daljinsko_ogrevanje}</h3>
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

export default OgrevanjeProstorov;