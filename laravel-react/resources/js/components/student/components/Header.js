import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../images/logo.png";
import SignOut from "../../middleware/axios/SignOut";

function Header(props) {
    const token = localStorage._authLocal;

    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href={props.url} className="text-info">
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
                <Nav>
                    <Link className="nav-link" to={props.url}>
                        หน้าแรก
                    </Link>
                    <Link className="nav-link" to={`${props.url}/profile`}>
                        ข้อมูลส่วนตัว
                    </Link>
                </Nav>
                <Nav className="ml-auto pr-2">
                    <Nav.Link>
                        <img
                            src="https://img.icons8.com/plasticine/2x/user.png"
                            className="d-inline-block align-top"
                            width="30"
                            height="30"
                            rounded="true"
                        />{" "}
                        {/* {this.state.users.firstName}{" "}
                            {this.state.users.lastName} */}
                    </Nav.Link>
                    <Link
                        className="nav-link"
                        to="/login"
                        onClick={() => SignOut(token)}
                    >
                        ออกจากระบบ
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
