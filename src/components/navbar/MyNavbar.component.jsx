import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo.png";
import "./MyNavbar.styles.css";

export const MyNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        className="animate-navbar nav-theme"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <span>
            <img src={logo} alt="" />
            <span>Keyur Machhi</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
