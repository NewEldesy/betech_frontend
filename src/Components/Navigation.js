import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import "./Acceuil.css"

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import {  NavLink } from 'react-router-dom';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};



function Navigation() {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll>
                <AppBar >
                    <Typography variant="" component="div">
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >

                            <Navbar.Brand href="/Acceuil">
                                <img
                                    alt=""
                                    src="/img/logo_1.jpeg"
                                    width="35"
                                    height="40"
                                    className="d-inline-block align-top mx-2"
                                />
                                B'Tech Group
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto"></Nav>
                                <Nav className='me-2'>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link1' : 'link1')} to="/Acceuil">Acceuil</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link1' : 'link1')} to="/Groupe">Groupe</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link1' : 'link1')} to="/Produits_activites">Produits & activités</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link1' : 'link1')} to="/Innovation">Innovation</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link1' : 'link1')} to="/Responsabilite">Responsabilité</NavLink>
                                    
                                    <NavDropdown title="Nous rejoindre" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Mon compte</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Contact
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Formulaire de contact
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Typography>
                </AppBar>
            </HideOnScroll>
            <Toolbar />

        </React.Fragment>

    );
}

export default Navigation;