import { useState } from "react";
import Axios from "axios";

// employeeList = energijaList  setEmployeeList = setEnergijaList
//addEmployee = addEnergija getEmployee = getEnergija


function Stats() {
  
  const [leto, setLeto] = useState(0);
  const [proizvodnja, setProizvodnja] = useState(0);

  const [energijaList, setEnergijaList] = useState([]);

  const addEnergija = () => {
    Axios.post("http://localhost:3001/create", {
      leto: leto,
      proizvodnja: proizvodnja,
    }).then(() => {
        setEnergijaList([
        ...energijaList,
        {
          
          leto: leto,
          proizvodnja: proizvodnja,
        },
      ]);
    });
  };

  const getEnergija = () => {
    Axios.get("http://localhost:3001/stats").then((response) => {
        setEnergijaList(response.data);
    });
  };


  return (
    <div className="App">
      <div className="information">
        
        <label>Leto:</label>
        <input
          type="number"
          onChange={(event) => {
            setLeto(event.target.value);
          }}
        />
        <label>Proizvodnja (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setProizvodnja(event.target.value);
          }}
        />
        <button onClick={addEnergija}>Dodaj</button>
      </div>
      <div className="energija">
        <button onClick={getEnergija}>Elektricna energija</button>

        {energijaList.map((val, key) => {
          return (
            <div className="energiaj1">
              <div>
              
                <h3>leto: {val.leto}</h3>
              
                <h3>proizvodnja: {val.proizvodnja}</h3>
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

export default Stats;