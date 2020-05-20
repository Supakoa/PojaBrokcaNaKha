import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "./logo.png";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Header(props) {
    let history = useHistory();
    const getUser = useSelector(state => state.userState);
    const [_header, setHeader] = React.useState({
        title: "",
        firstName: "",
        lastName: ""
    });
    const [_url, setURL] = React.useState(props.url);

    React.useEffect(() => {
        console.log(localStorage);

        console.log(getUser.data);
    }, []);

    const handleLogOut = () => {
        const token = getUser.token;
        axios
            .post(`http://localhost:8000/api/logout`, token, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                console.log(res.status);
                history.push("/login");
            });
    };

    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href={_url} className="text-info">
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
                        {_header.firstName} {_header.lastName}
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
