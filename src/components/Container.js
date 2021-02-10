import React from "react"
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card} from 'react-bootstrap';

function Container() {
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.concours-preuve-image.fr/wp-content/uploads/2020/05/les-larmes-d-une-mere-web.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>) 
}

export default Container