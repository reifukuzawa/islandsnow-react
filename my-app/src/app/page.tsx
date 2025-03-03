"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Facebook, Twitter, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from "react-bootstrap-icons";

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
  <Container>
    <Nav className="me-auto">
      <Nav.Link><Facebook/></Nav.Link>
      <Nav.Link><Twitter/></Nav.Link>
      <Nav.Link><Pinterest/></Nav.Link>
      <Nav.Link><Instagram/></Nav.Link>
    </Nav>
    <Nav className="justify-content-end">
      <Nav.Link><HouseFill/> </Nav.Link>
      <Nav.Link><Search/> </Nav.Link>
      <Nav.Link><PersonFill/> </Nav.Link>
      <NavDropdown title={<Cart/>}>
        <NavDropdown.Item></NavDropdown.Item>
        <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
      </NavDropdown>
    </Nav>
  </Container>
</Navbar>
);

const IslandSnowLogo = () => (
  <Row>
    <Col>
      <Image
        src="https://courses.ics.hawaii.edu/ics314s25/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow Hawaii Logo"
        fluid
        rounded
        className="d-block mx-auto py-1"
      />
    </Col>
  </Row>

);

const MiddleMenu = () => (

  <Container>
    <Nav className="justify-content-center w-100">  
      <Row className="justify-content-center pt-4">
        <Col xs="auto">
        <NavDropdown title={<strong className="text-dark">MENS</strong>} className="text-dark"> </NavDropdown>
        </Col>

        <Col xs="auto">
        <NavDropdown title={<strong className="text-dark">WOMENS</strong>} className="text-dark"> </NavDropdown>
        </Col>

        <Col xs="auto">
        <NavDropdown title={<strong className="text-dark">KIDS</strong>} className="text-dark"> </NavDropdown>
        </Col>

        <Col xs="auto">
        <NavDropdown title={<strong className="text-dark">BRANDS</strong>} className="text-dark"> </NavDropdown>
        </Col>

        <Col xs="auto">
        <Nav.Link className="text-dark"><strong>SEARCH</strong></Nav.Link>
        </Col>
      </Row>
    </Nav>
  </Container>
);

const FullWidthImage = () => (
  <Container>
    <Row className="justify-content-center">
      <Image 
        src="https://courses.ics.hawaii.edu/ics314s25/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"
        alt="Island Snow Video Snapshot"
        className="pt-2"
        fluid
      />
    </Row>
  </Container>
);

const FooterMenu = () => (
  <footer className="footer-background py-3">
    <Container>
      <Row>

        <Col>
          <div><strong>NAVIGATION</strong></div>
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>

        <Col>
          <div><strong>MAIN MENU</strong></div>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>

        <Col>
          <div><strong>CONNECT</strong></div>
          <hr />
          <div>Sign up for the latest updates</div>
          <div className="py-2 d-flex">
            <Form.Control type="email" placeholder="Enter Email Address" className="me-2" />
            <Button variant="dark">Join</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <main>
      <Container>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
      </Container>
    </main>
  );
}
