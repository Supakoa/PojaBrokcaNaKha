import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "./logo.png";
import axios from "axios";

export default function Header(props) {
    let history = useHistory();

    const handleLogOut = () => {
        const token = localStorage._authLocal;
        axios
            .post(`http://localhost:8000/api/logout`, token, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 401) {
                    console.log("Token false");
                } else {
                    localStorage.removeItem("_authLocal");
                    history.push("/login");
                }
            })
            .catch(error => {
                alert(error);
                localStorage.removeItem("_authLocal");
            });
    };

    return (
        <Navbar bg="light" expand="sm">
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
                    <Link
                        className="nav-link"
                        to="/login"
                        onClick={handleLogOut}
                    >
                        Log-Out
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
