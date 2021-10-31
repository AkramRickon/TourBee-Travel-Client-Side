import './Header.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="w-100">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >TourBee Travels</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="link-style" to="/home">Home</NavLink>
                            <NavLink className="link-style" to="/packages">Packages</NavLink>
                            {
                                (user?.email) && <>
                                 <NavLink className="link-style" to="/myBookings">MyBookings</NavLink>  <NavLink className="link-style" to="/addPackage">AddPackage</NavLink>
                                <NavLink className="link-style" to="/manageBookings">ManageBookings</NavLink>
                                </>
                            }
                            <NavLink className="link-style" to="/contact">Contact Us</NavLink>
                            {(user?.email) && <span style={{ color: "white", padding: "10px" }}>{user.displayName}</span>}
                            {
                                !(user?.email) ? <NavLink className="link-style" to="/login">Sign In</NavLink> :
                                    (
                                        <button className=" bg-info  rounded-3" onClick={logOut}>Logout<i className="ms-1 fas fa-sign-out-alt fs-6"></i></button>)
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;