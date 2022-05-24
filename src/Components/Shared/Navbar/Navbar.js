import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Assets/arctool.png"
import "./Navbar.css"

const NavBar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (


        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="me-5">
                        <img src={logo} width="170" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link}
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to="/">
                                Home
                            </NavLink>
                            <NavLink as={Link}
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to="blog">
                                Blog
                            </NavLink>
                            {user && (
                                <>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="addcar">
                                        Add Car
                                    </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="mycar">
                                        My Cars
                                    </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="manage">
                                        Manage Cars
                                    </NavLink>
                                </>
                            )}
                            <NavLink as={Link}
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to="contact">
                                Contact
                            </NavLink>
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <button onClick={logout} className="btn signoutbtn">
                                        Logout <i class="bi bi-box-arrow-right"></i>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="login">
                                        Login
                                    </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="register">
                                        Register
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
