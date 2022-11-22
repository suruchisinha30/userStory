import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import './navbar.css';



const Navibar = (props) => {
  const NavLinkItem = (linkitem) => {
    return (<Nav.Link href="#pricing">{linkitem.title}</Nav.Link>);
  };
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg={props.clsnm} variant={props.vrnt} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={props.br} style={props.st} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {React.Children.toArray(props.links.mockLinks.map(NavLinkItem))}
            
          </Nav>
          <Nav>
          <NavDropdown title={props.droptitle} id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            <span className="fa fa-sign-out" />
            <Nav.Link eventKey={2} href="#memes">
              {props.userBtn}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
