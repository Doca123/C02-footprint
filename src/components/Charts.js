import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const data= {
  labels: ["Red", "Blue", "Green","Purple"],
  datasets:[
    {
      data:[12,33,2,5],
      
    },
  ]
};

function Charts() {
  return (
    <div>

      <h1>Bar chart</h1>
      <div style={{width:"500px",margin:"0 auto"}}>
        <Doughnut data={data}/>
      </div>
    </div>
  )
}

export default Charts
