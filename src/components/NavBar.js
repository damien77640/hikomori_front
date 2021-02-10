import React from "react"
import { Nav, NavDropdown, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import HikomoriWhiteLogo from "../image/HikomoriLogoWhite.png"

function NavBar(){
    return(
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">
      <img
        src= {HikomoriWhiteLogo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="Hikomori White logo"
      />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/favorites">Favorites</Nav.Link>
      <Nav.Link href="/forum">Forum</Nav.Link>
      <Nav.Link href="/maps">Maps</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>

    </Form>
  </Navbar>
    )
        }
        
export default NavBar