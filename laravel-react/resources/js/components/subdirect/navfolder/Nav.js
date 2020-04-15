import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';


export default function NavBar() {
    return(
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">
                Petition Web
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="petition-nav" />
            <Navbar.Collapse id="petition-nav">
                <Nav className="ml-auto">
                    <Link to="#" >Log out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
