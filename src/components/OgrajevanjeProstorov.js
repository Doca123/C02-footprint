import { useState } from "react";
import Axios from "axios";


function OgrevanjeProstorov() {
  
  const [leto, setLeto] = useState(0);
  const [lokalno_ogrevanje, setLokalno_ogrevanje] = useState(0);
  const [centralno_ogrevanje, setCentralno_ogrevanje] = useState(0);
  const [daljinsko_ogrevanje, setDaljinsko_ogrevanje] = useState(0);

  const [OgrevanjeProstorovList, setOgrevanjeProstorovList] = useState([]);

  
  const getOgrevanjeProstorov = () => {
    Axios.get("http://localhost:3001/stats3").then((response) => {
        setOgrevanjeProstorovList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Elektricna energija</h1>
      </div>
      <div className="energija">
        <button onClick={getOgrevanjeProstorov}>Elektricna energija</button>

        {OgrevanjeProstorovList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>leto: {val.leto}</h3>
              
                <h3>lokalno_ogrevanje: {val.lokalno_ogrevanje}</h3>

                <h3>centralno ogrevanje: {val.centralno_ogrevanje}</h3>

                <h3>daljinsko ogrevanje: {val.daljinsko_ogrevanje}</h3>
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