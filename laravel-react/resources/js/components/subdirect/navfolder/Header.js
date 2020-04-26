import React from 'react';
import {Navbar, Nav, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Logo from "./logo.png";


export default function Header() {

    let userName = 'supakit kitjanabumrungsak';

    return(
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home" className="text-info">
                <img src={Logo}
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                />{' '}
                Petition Web
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="petition-nav" />
            <Navbar.Collapse id="petition-nav">
                <Nav className="ml-auto pr-2">
                    <Nav.Link>
                        <img src="https://img.icons8.com/plasticine/2x/user.png"
                             className="d-inline-block align-top"
                             width="30"
                             height="30"
                             rounded="true"
                        />
                        {userName}
                    </Nav.Link>
                    <Link className="nav-link" to="/">Log-Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
