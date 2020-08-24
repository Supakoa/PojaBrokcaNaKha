import React from "react";
import {
    Navbar,
    Nav,
    Container,
    Image,
    Spinner,
    Dropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../../images/logo.png";
import SignOutBtn from "../../../auth/sign-out";
import SwitchingLanguageBtn from "../../../middleware/switchingLanguage";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function NavHeader(props) {
    const { t } = useTranslation();
    const _user = useSelector(state => state.userState);
    return (
        <Navbar bg="info" expand="sm">
            <Container fluid>
                <Navbar.Brand href={props.url} className="text-light">
                    <img
                        src={Logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{" "}
                    {t("txt-logo")}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="petition-nav" />
                <Navbar.Collapse id="petition-nav">
                    <Nav>
                        <Link
                            className="nav-link text-light"
                            to={`${props.url}/${_user.id}`}
                        >
                            {t("students.navbar-top.home")}
                        </Link>
                        <Link
                            className="nav-link text-light"
                            to={`${props.url}/profile`}
                        >
                            {t("students.navbar-top.profile")}
                        </Link>
                    </Nav>
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
                        <Link to="#" className="px-2 py-2">
                            <SwitchingLanguageBtn className="nav-link" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHeader;
