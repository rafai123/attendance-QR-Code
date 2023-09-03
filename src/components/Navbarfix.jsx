import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavbarFix = () => {

  const isLoggedIn = JSON.parse(localStorage.getItem("login")); // // true or false

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login");
    window.location.reload();
  };

  let component = "";
  if (isLoggedIn) {
    component = (
      <>
        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="btn btn-purple">{isLoggedIn.nama}</Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="text-center mx-4 my-2">
                <img
                  height={120}
                  className="text-center justify-center rounded"
                  src={isLoggedIn.avatar} 
                />

                <h5 className="ms-auto text-center">{isLoggedIn.nama}</h5>

                <Button
                  onClick={handleLogout}
                  // onClick={window.localStorage.clear()}
                  className="logindong text-white text-carevul border-carevul py-2 btn btn-purple mt-3"
                >
                  Logout
                </Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>
    )
  } else {
      component = (
        <>
          {/* <div className="text-center ">
            <NavLink
              to={"/login"}
              className="logindong btn text-carevul border-carevul m-1"
            >
              Login
            </NavLink>
            <NavLink
              to={"/regis"}
              className="btn color-carevul-gradient text-white m-1"
            >
              Register
            </NavLink>
          </div> */}
          <Nav className="ms-auto my-1 gap-2 ">
            <Link to="/register" class="btn btn-outline-light px-5 my-1">
                Daftar
            </Link>
            <Link to="/login" class="btn btn-purple px-5 my-1">
                Login
            </Link>
          </Nav>
        </>
      );
  }


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
          {component}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarFix;
