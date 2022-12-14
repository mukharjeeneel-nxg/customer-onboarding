import { Container,Navbar,Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Header() {

    return(
        <Navbar fixed="top" collapseOnSelect  expand="lg" bg="primary" variant="dark">
  <Container >
  <Link to="/home" ><Navbar.Brand > NXG Admin</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
    </Nav>
    <Nav>
     
    <NavDropdown title="My Account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Seller Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Upgrade Plan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Request Feature</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}