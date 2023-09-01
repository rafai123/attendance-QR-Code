import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const NavbarFix = () => {
  return (
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#">Absensi STIKOM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 text-center"  >
            <NavLink to="/" className="nav-link">Home</NavLink>           
            <NavLink to="/scan" className="nav-link">Scan</NavLink>           
            <NavLink to="/student-list" className="nav-link">Daftar Mahasiswa</NavLink>           
          </Nav>
          <Nav className="ms-auto my-1 gap-2 ">
            <Link to="/register" class="btn btn-outline-light px-5 my-1">
                Daftar
            </Link>
            <Link to="/login" class="btn btn-purple px-5 my-1">
                Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFix;
