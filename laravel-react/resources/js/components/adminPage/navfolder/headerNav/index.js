import React from "react";
import { Navbar, Spinner, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import SignOutBtn from "../../../auth/sign-out";
import SwitchingLanguageBtn from "../../../middleware/switchingLanguage";
import { useSelector } from "react-redux";
export default function HeaderNav(props) {
    const _user = useSelector(s => s.userState);
    return (
        <Navbar
            bg="info"
            className="d-flex align-items-center justify-content-between"
        >
            <Navbar.Brand href={props.path} className="text-light">
                <Image
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{" "}
                Petition Web
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="petition-nav" />
            <Navbar.Collapse id="petition-nav">
                <Nav className="d-flex align-items-center justify-content-end text-light">
                    {Object.keys(_user).length !== 0 ? (
                        <Link
                            to="#"
                            className="text-light d-flex align-items-center justify-content-center px-2"
                        >
                            <Image
                                src="https://img.icons8.com/plasticine/2x/user.png"
                                className="d-inline-block align-top"
                                width="30"
                                height="30"
                                rounded="true"
                            />{" "}
                            {`${_user.title} ${_user.first_name} ${_user.last_name}`}
                        </Link>
                    ) : (
                        <Spinner animation="border" size="sm" />
                    )}
                    <Link to="#" className="px-3">
                        <SwitchingLanguageBtn />
                    </Link>
                    <SignOutBtn className="text-light" />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
