import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './navigationBar.module.css';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/images/logos/logo.png'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar style={{marginTop: '10px', marginBottom: '10px'}} expand="lg">
            <Link to="/home">
                <Navbar.Brand><img className={classes.siteLogo} src={logo} alt="logo"/></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`ml-auto ${classes.navigationMenu}`}>
                    <Link to="/home">
                        Home
                    </Link>
                    <Link to="/home">
                        Our Portfolio
                    </Link>
                    <Link to="/home">
                        Our Team
                    </Link>
                    <Link to="/home">
                        Contact Us
                    </Link>
                    <Link to="/adminPanel/serviceList">
                        Admin
                    </Link>
                    <Link to="/login">
                        Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;