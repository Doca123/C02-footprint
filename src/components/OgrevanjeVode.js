import { useState } from "react";
import Axios from "axios";


function OgrevanjeVode() {
  

  const [OgrevanjeVodeList, setOgrevanjeVodeList] = useState([]);

  
  const getOgrevanjeVode = () => {
    Axios.get("http://localhost:3001/stats4").then((response) => {
        setOgrevanjeVodeList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
       <h1>Izpis - Elektricna energija</h1>
      </div>
      <div className="energija">
        <button onClick={getOgrevanjeVode}>Elektricna energija</button>

        {OgrevanjeVodeList.map((val, key) => {
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

export default OgrevanjeVode;