import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo/logo.jpg";
import "./Navigation.css";

const Navigation = () => {
  const history = useHistory();
  const {
    currentUser: { displayName, photoURL },
    userName,
    setUserName,
    handleLogout,
  } = useAuth();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("userName"));
    currentUser ? setUserName(currentUser) : setUserName("");
  }, [setUserName]);
  return (
    <Navbar bg="body" expand="lg">
      <div className="container-fluid mx-5 px-4">
        <NavLink className="nav-link" to="/">
          <Navbar.Brand className="d-flex align-items-center fw-bold">
            <img className="logo me-3" src={logo} alt="logoImg" />
            Trusmile
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link fw-bold me-2" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link fw-bold me-2" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-link fw-bold me-2" to="/facilities">
              Facilities
            </NavLink>
            <NavLink className="nav-link fw-bold me-2" to="/about-us">
              About us
            </NavLink>
            <NavLink className="nav-link fw-bold me-2" to="/contact-us">
              Contact us
            </NavLink>

            {photoURL && (
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={photoURL}
                loading="lazy"
                alt="img"
              />
            )}
            {(displayName || userName) && (
              <span className="fw-bold me-2 px-1 py-2">
                {displayName || userName}
              </span>
            )}
            {!(displayName || userName) ? (
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-primary shadow-none rounded-pill py-2 px-3"
                >
                  Log in
                </button>
              </Link>
            ) : (
              <button
                onClick={() => [handleLogout(), history.push("/")]}
                type="button"
                className="btn btn-primary shadow-none rounded-pill py-2 px-3"
              >
                Log out
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
