import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../../images/logo.png";
import SignOutBtn from "../../../auth/sign-out";
import SwitchingLanguageBtn from "../../../middleware/switchingLanguage";
import { useSelector } from "react-redux";
import Loading from "../loading";

function NavHeader(props) {
    // const token = localStorage._authLocal;
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
                    Petition Web
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="petition-nav" />
                <Navbar.Collapse id="petition-nav">
                    <Nav>
                        <Link
                            className="nav-link text-light"
                            to={`${props.url}/${_user.id}`}
                        >
                            หน้าแรก
                        </Link>
                        <Link
                            className="nav-link text-light"
                            to={`${props.url}/profile`}
                        >
                            ข้อมูลส่วนตัว
                        </Link>
                    </Nav>
                    <Nav className="ml-auto pr-2">
                        {_user.title === undefined ? (
                            <Loading />
                        ) : (
                            <Link
                                className="text-light d-flex align-items-center justify-content-center mr-2"
                                to={`${props.url}/profile`}
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
                        )}
                        <Link to="#" className="px-2">
                            <SwitchingLanguageBtn className="nav-link" />
                        </Link>
                        <SignOutBtn className="text-light d-flex align-items-center justify-content-center" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHeader;
