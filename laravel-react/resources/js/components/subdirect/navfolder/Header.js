import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import axios from "axios";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoWeb: {
                logo: {
                    imgSrc: Logo,
                    width: "30",
                    height: "30"
                },
                name: "Petition Web"
            },
            users: {
                title: props.user.title,
                firstName: props.user.firstName,
                lastName: props.user.lastName
            },
            url: props.path
        };
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        axios.post(`http://127.0.0.1:8000/api/logout`).then(res => {
            console.log(res.status);
        });
    }

    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href={`${this.state.url}`} className="text-info">
                    <img
                        src={this.state.infoWeb.logo.imgSrc}
                        width={this.state.infoWeb.logo.width}
                        height={this.state.infoWeb.logo.height}
                        className="d-inline-block align-top"
                    />{" "}
                    {this.state.infoWeb.name}
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
                            {this.state.users.firstName}{" "}
                            {this.state.users.lastName}
                        </Nav.Link>
                        <Link
                            className="nav-link"
                            to="/login"
                            onClick={this.handleLogOut}
                        >
                            Log-Out
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
