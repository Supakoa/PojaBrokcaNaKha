import React, {Component} from 'react';
import {Navbar, Nav, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Logo from "./logo.png";


export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            infoWeb:{
                logo:{
                  imgSrc: Logo,
                  width: "30",
                  height:"30"
                } ,
                name:'Petition Web'
            },
            users:{
                id:1,
                firstName:'Supakit',
                lastName:'Kitjanabumrunsak'
            }
        }
    }
    render() {
        return(
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/" className="text-info">
                    <img src={this.state.infoWeb.logo.imgSrc}
                         width={this.state.infoWeb.logo.width}
                         height={this.state.infoWeb.logo.height}
                         className="d-inline-block align-top"
                    />{' '}
                    {this.state.infoWeb.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="petition-nav" />
                <Navbar.Collapse id="petition-nav">
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
                        <Link className="nav-link" to="/">Log-Out</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }


}
