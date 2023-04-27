import React from 'react'
import Card from 'react-bootstrap/Card';
import worker1 from "../images/worker1.png";
import '../css/Panel.css'
import Chart from "react-apexcharts";
import {useEffect,useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Panel4() {


 


   const [oldVal,newVal]=useState([]);
    useEffect(()=>{
      const intervalId = setInterval(() => {
        fetch("http://localhost:8081/api/insert")
        .then(response => response.json())
      .then(data => newVal(data));
      }, 1000); // fetch data every second
      return () => clearInterval(intervalId);
        
        
     },[])


// HEARBEAT VALUES
// const range = 140;
// const min_1=100;
// const dif_1=range-min_1;
const numValues = 6;
// let mappedValues = [];

// for (let i = 0; i < numValues; i++) {
  
//   let randomValue = Math.random();
//   let mappedValue = Math.floor(randomValue * dif_1);
//   mappedValue=mappedValue+min_1;
//   mappedValues.push(mappedValue);
// }
  
  const series1 = [
    {
      name: "HEARTBEATS",
      data:  oldVal.map(items=>items.Heartbeat)
    }
  ];
  const options1 = {
    xaxis: {
      categories: [1, 2, 3, 4,5,6],
      title:{
        text:'Minutes'
      },
    },
   yaxis:{
    title:{
      text:'Beats Per Minute'
    },
   },
    
  };

  // HEARBEAT VALUES

// GAS CONCENTRATION LEVEL
const options2 = { labels: ["Carbon monoxide", "Carbon Dioxide", "Methane", "Oxygen", "Others"] };
const series2 = [0.9, 4, 0.1, 7, 5]; //our data

// GAS CONCENTRATION LEVEL


// HUMIDITY
// const range3 = 50;
// const min=20;
// const dif=range3-min;
const numValues3 = 6;
// let BmappedValues = [];

// for (let i = 0; i < numValues; i++) {
  
//   let randomValue = Math.random();
//   let BmappedValue = Math.floor(randomValue * dif);
//   BmappedValue=BmappedValue+min;
//   BmappedValues.push(BmappedValue);
// }

const series3 = [
  {
    name: "Humidity",
    data: oldVal.map(items=>items.Humidity)
  }
];
const options3 = {
  xaxis: {
    categories: [1, 2, 3, 4,5,6],
    title:{
      text:'Time(min)'
    }
  },
  yaxis:{
    title:{
      text:'Humidity'
    }
  }
 
};

// HUMIDITY


// GAS CONCENTRATION LEVEL

// const range4 = 151;
// const min1=100;
// const dif1=range4-min1;
// let CmappedValues = [];

// for (let i = 0; i < numValues; i++) {
  
//   let randomValue = Math.random();
//   let CmappedValue = Math.floor(randomValue * dif1);
//   CmappedValue=CmappedValue+min1;
//   CmappedValues.push(CmappedValue);
// }
const series4 = [
  {
    name: "Height in feet",
    data: oldVal.map(items=>items.Concentration)
  },
];
const options4 = {
  chart: {
    id: "simple-bar",
  },
  xaxis: {
    categories: [
      "Carbon Monoxide",
      "Carbon Dioxide",
      "Methane",
      "Hydrogen",
      "Hydrocarbon",
      "Others",
    ],
    title:{
      text:'Gases In Coal Mines'
    }
  },
  yaxis:{
    title:{
      text:'Concentration Of Gases(in ppm)'
    }
  }
};

// GAS CONCENTRATION LEVEL
  return (
    <div className='container'>

      <div className='Sidebar'>
        <Card style={{ width: '22rem' }} >
          <Card.Img variant="top" src={worker1} />
          <Card.Body>
            <Card.Title>Mine Worker ID-4</Card.Title>
            <Card.Text>
             Name:Delta<br></br>
              Gender:FEMALE<br></br>
              AGE:22<br></br>
              
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '28rem' }} >
              <Card.Body>
                <Card.Title>HEARTBEATS</Card.Title>
                <Chart type="area" series={series1} options={options1} width="100%" />

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '28rem' }} >
              <Card.Body>
                <Card.Title>PERCENTAGE OF GAS</Card.Title>
                <Chart options={options2} series={series2} type="pie" width="455px" />

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '28rem' }} >
              <Card.Body>
                <Card.Title>HUMIDITY</Card.Title>
                <Chart type="line" series={series3} options={options3} width="100%" />

              </Card.Body>
            </Card>
          </Col>
          <Col className='graph'>
            <Card style={{ width: '28rem' }} >
              <Card.Body>
                <Card.Title>GAS CONCENTRATION</Card.Title>
                <Chart type="bar" series={series4} options={options4} width="100%" />

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Panel4
