import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark border-dark border-bottom border-1 ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong>NEWS R</strong>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-4">
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/business">
                <strong>Business</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/entertainment">
                <strong>Entertainment</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/health">
                <strong>Health</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/science">
                <strong>Science</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/sports">
                <strong>Sports</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:"white"}} to="/technology">
                <strong>Technology</strong>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>Country</strong>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    US
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    IND
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    PAK
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex " role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-primary"
              style={{ color: "black" }}
              type="submit"
            >
              <strong>Search</strong>
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
