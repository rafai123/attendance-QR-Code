import { Link, NavLink } from "react-router-dom";
import "./../index.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <a class="navbar-brand fw-bolder" href="#">
            Absensi STIKOM
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Scan
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Daftar Mahasiswa
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <NavLink to={"/register"} class="btn btn-outline-light px-5 me-2">
                Daftar
              </NavLink>
              <Link to={"/login"} class="btn btn-purple px-5">
                Login
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
