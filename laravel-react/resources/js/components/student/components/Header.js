import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Logo from "./../../images/logo.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoWeb: {
                logo: {
                    imgSrc: Logo,
                    width: "30",
                    height: "30"
                },
                name: 'Petition Web'
            },
            users: {
                id: 1,
                firstName: 'Supakit',
                lastName: 'Kitjanabumrunsak'
            },
            url: props.url
        }
    }

    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href={`${this.state.url}`} className="text-info">
                    <img src={this.state.infoWeb.logo.imgSrc}
                         width={this.state.infoWeb.logo.width}
                         height={this.state.infoWeb.logo.height}
                         className="d-inline-block align-top"
                    />{' '}
                    {this.state.infoWeb.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="petition-nav" />
                <Navbar.Collapse id="petition-nav">
                    <Nav>
                        <Link className="nav-link" to={`${this.state.url}`} >หน้าแรก</Link>
                        <Link className="nav-link" to={`${this.state.url}/profile`}>ข้อมูลส่วนตัว</Link>
                    </Nav>
                    <Nav className="ml-auto pr-2">
                        <Nav.Link>
                            <img src="https://img.icons8.com/plasticine/2x/user.png"
                                 className="d-inline-block align-top"
                                 width="30"
                                 height="30"
                                 rounded="true"
                            />{' '}
                            {this.state.users.firstName}{' '}{this.state.users.lastName}
                        </Nav.Link>
                        <Link className="nav-link" to="/login">ออกจากระบบ</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;