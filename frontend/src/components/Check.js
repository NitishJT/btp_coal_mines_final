import React from 'react'

import '../App.css';
import Chart from "react-apexcharts";
import {useEffect,useState} from 'react';
function Check() {

  //  const [oldVal,newVal]=useState([]);
  //   useEffect(()=>{
  //     const intervalId = setInterval(() => {
  //       fetch("http://localhost:8081/api/insert")
  //       .then(response => response.json())
  //     .then(data => newVal(data));
  //     }, 1000); // fetch data every second
  //     return () => clearInterval(intervalId);
        
        
  //    },[])

  
  
  const range = 100;
  const numValues = 6;
  let mappedValues = [];
  
  for (let i = 0; i < numValues; i++) {
    let randomValue = Math.random();
    let mappedValue = Math.floor(randomValue * range);
    mappedValues.push(mappedValue);
  }
     // Chart 1 Bar Graph................
  var series = [
    {
      name: "Temperature in Fahrenheit", //will be displayed on the y-axis
      data: mappedValues   }
  ];


  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories: [1, 2, 3, 4,5,6] //will be displayed on the x-asis
    }
};

    // Chart 1 Bar Graph................
 // Chart 2 Line Graph................
    
//  const series1 = [
//     {
//       name: "Humidity",
//       data: oldVal.map((item) => item.Humidity)
//     }
//   ];
//   const options1 = {
//     xaxis: {
//       categories: oldVal.map((item) => item.Class)
//     }
//   };

// Chart 2 Line Graph................

  return (
   
      
      <div className="bar1">
        <h1>Hello</h1>
<Chart className="frst" options={options} type="bar" series={series} width="50%" />
<h3 className="chart_heading1">Temperature In Coal Mines</h3>
<div>
{/* <Chart type="line" series={series1} options={options1} width="50%" />; */}
<h3 className="chart_heading2">Humidity In Coal Mines</h3>
</div>
    </div>
  )
};

export default Check
