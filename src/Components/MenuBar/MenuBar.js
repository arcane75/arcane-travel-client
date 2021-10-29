import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import "./MenuBar.css";

initializeAuthentication();

const MenuBar = () => {
    const { user, logOut } = useFirebase();
    console.log(user);
    return (
        <div className="menubar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <img className="logo me-5" src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" justify-content-end " style={{ width: "100%" }}>


                            <NavLink className="pe-3 ps-3 item text-white" to="/home"><i className="fas fa-home"></i> Home</NavLink>

                            <NavLink className="pe-3 item text-white" to="/services"><i className="fas fa-tasks"></i> Services</NavLink>

                            <NavLink className="pe-3 item text-white" to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>

                            <NavLink className="pe-3 item text-white" to="/about"><i className="far fa-calendar-check"></i> About Us</NavLink>


                            {(user?.email) ?

                                <Button className="logoutbtn btn-sm text-white" onClick={logOut}>Logout {user?.displayName}</Button>
                                :
                                <NavLink className="item text-white" to="/userlogin"><i className="fas fa-user"></i> Login 
                                </NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;