import React from 'react'
import { Line } from 'react-chartjs-2'
import '../syles/Graph.css'

const makeArrayOfNumbers = arr => {
  const array = [];
  for(let i = 1; i <= arr.length; i++) {
    array.push(i)
  }
  return array
}

const data = (points) => {
  return {
    labels: makeArrayOfNumbers(JSON.parse(localStorage.getItem('budgetArr'))),
    datasets: [
      {
        label: 'budget',
        data: points,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }

} 

const options = {
  maintainAspectRatio: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}


function Graph() {
  return (<>
    <div className="line-chart">
      <Line data={data(JSON.parse(localStorage.getItem('budgetArr')))} options={options} />
    </div>
  </>)
}
 


export default Graph