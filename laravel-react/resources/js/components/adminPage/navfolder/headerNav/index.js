import React from "react";
import {
    Navbar,
    Spinner,
    Image,
    Nav,
    Container,
    Dropdown
} from "react-bootstrap";
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
            className="d-flex align-items-center justify-content-around sticky-top"
            variant="dark"
        >
            <Container>
                <Navbar.Brand href={props.path} className="mr-auto">
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
                        <Dropdown>
                            {Object.keys(_user).length > 0 ? (
                                <Dropdown.Toggle
                                    as={Link}
                                    id="dropdown-custom-components"
                                    to="#"
                                    className="text-light d-flex align-items-center justify-content-start mr-lg-3 mr-md-3 py-2"
                                >
                                    <Image
                                        src="https://img.icons8.com/plasticine/2x/user.png"
                                        className="d-inline-block align-top"
                                        width="30"
                                        height="30"
                                        rounded="true"
                                    />{" "}
                                    {`${_user.title} ${_user.first_name} ${_user.last_name}`}
                                </Dropdown.Toggle>
                            ) : (
                                <Spinner animation="border" size="sm" />
                            )}

                            <Dropdown.Menu className="bg-info">
                                <Dropdown.Item
                                    as={SignOutBtn}
                                    className="text-light d-flex align-items-center justify-content-start py-2 pl-2"
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                        <SwitchingLanguageBtn />
                        {/* <SignOutBtn className="text-light py-3" /> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
