import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">COAL MINE BTP</Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;