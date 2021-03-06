import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import "./MenuBar.css";
//import useCart from '../../hooks/useCart';

initializeAuthentication();

const MenuBar = () => {
    const { user, logOut } = useFirebase();
    return (
        <div className="menubar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <img className="logo me-5" src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=" justify-content-end " style={{ width: "100%" }}>


                            <NavLink className="pe-5 ps-3 item" to="/home"><i className="fas fa-home"></i> Home</NavLink>

                            <NavLink className="pe-5 item" to="/myOrder"><i className="fas fa-user"></i> My Order</NavLink>

                            <NavLink className="pe-5 item" to="/admin"><i className="fas fa-tasks"></i> Admin</NavLink>

                            <NavLink className="pe-5 item" to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>

                            <NavLink className="pe-5 item" to="/about"><i className="far fa-calendar-check"></i> About Us</NavLink>


                            {(user?.email) ?

                                <Button className="logoutbtn btn-sm" onClick={logOut}>Logout {user?.displayName}</Button>
                                :
                                <NavLink className="item" to="/userlogin"><i className="fas fa-user"></i> Login
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