import { Container, Row,Col } from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/WorkerPanel.css';
import worker1 from "../images/construction-worker.png";
import worker2 from "../images/worker.png";
import worker3 from "../images/construction-worke2r.png";
import worker4 from "../images/worker1.png";
function BasicExample() {
    const navigate = useNavigate();
    const navigate1=()=>{
         navigate('/worker1')
    };
    const navigate2=()=>{
        navigate('/worker2')
   };
   const navigate3=()=>{
    navigate('/worker3')
};
const navigate4=()=>{
    navigate('/worker4')
};

  return (

<div>
    <Container className='box1'> 
        <Row>
            <Col >
            <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={worker1} />
      <Card.Body>
      <Card.Title>Mine Worker ID-1</Card.Title>
            <Card.Text>
              Name:Alpha<br></br>
              Gender:MALE<br></br>
              AGE:25<br></br>
              
            </Card.Text>
        <Button onClick={navigate1} variant="primary" >INSPECT</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={worker2} />
      <Card.Body>
      <Card.Title>Mine Worker ID-2</Card.Title>
            <Card.Text>
              Name:Beta<br></br>
              Gender:MALE<br></br>
              AGE:39<br></br>
              
            </Card.Text>
        <Button onClick={navigate2} variant="primary">INSPECT</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={worker3} />
      <Card.Body>
      <Card.Title>Mine Worker ID-3</Card.Title>
            <Card.Text>
              Name:Gamma<br></br>
              Gender:MALE<br></br>
              AGE:28<br></br>
              
            </Card.Text>
        <Button onClick={navigate3} variant="primary">INSPECT</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={worker4} />
      <Card.Body>
      <Card.Title>Mine Worker ID-4</Card.Title>
            <Card.Text>
              Name:Delta<br></br>
              Gender:FEMALE<br></br>
              AGE:22<br></br>
              
            </Card.Text>
        <Button onClick={navigate4} variant="primary">INSPECT</Button>
      </Card.Body>
    </Card>
            </Col>
            
        </Row>
    </Container>
    
        
    </div>
  );
}

export default BasicExample;