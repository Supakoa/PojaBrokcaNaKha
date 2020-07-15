import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import SignOutBtn from "../../../auth/sign-out";

export default function HeaderNav(props) {

    return (
        <Navbar bg="light">
            <Navbar.Brand href={props.path} className="text-info">
                <img
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{" "}
                Petition Web
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="petition-nav" />
            <Navbar.Collapse id="petition-nav">
                <Nav className="ml-auto pr-2">
                    <Nav.Link>
                        <img
                            src="https://img.icons8.com/plasticine/2x/user.png"
                            className="d-inline-block align-top"
                            width="30"
                            height="30"
                            rounded="true"
                        />{" "}
                        {props.info.first} {props.info.last}
                    </Nav.Link>

                    <SignOutBtn className = "nav-link"/>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
