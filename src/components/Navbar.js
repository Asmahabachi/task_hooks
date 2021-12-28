import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap';
import Filter from './Filter'
function NavBar() {
    return (
        <div>
         <Navbar bg="dark" variant="dark">
           
    <Container>
      
    <Navbar.Brand href="#home">Ciné</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Movies</Nav.Link>
      <Nav.Link href="#features">Series</Nav.Link>
      <Nav.Link href="#pricing">Anim/Cartoon</Nav.Link>
    </Nav>
    </Container>
    <Filter />
  </Navbar>
        </div>
    )
}

export default NavBar
