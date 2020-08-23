import React from "react";
import Logo from "../../../images/logo.png";
import { Navbar, Spinner, Image, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SwitchingLanguageBtn from "../../../middleware/switchingLanguage";
import SignOutBtn from "../../../auth/sign-out";
import { useSelector } from "react-redux";

const HeaderApprover = () => {
    const _user = useSelector(s => s.userState);
    return (
        <Navbar
            bg="info"
            className="d-flex align-items-center justify-content-around"
            variant="dark"
        >
            <Container>
                <Navbar.Brand className="mr-auto">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    Petition
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
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
            </Container>
        </Navbar>
    );
};

export default HeaderApprover;
