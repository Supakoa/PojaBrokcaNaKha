import React from "react";
import { Navbar, Nav, Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../../images/logo.png";
import { ProfileContext } from "../../context";
import SignOutBtn from "../../../auth/sign-out";

function NavHeader(props) {
    // const token = localStorage._authLocal;
    const [loading, setLoading] = React.useState(true);
    const [_dataEmp, setDataEmp] = React.useState({});
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout();
        };
    }, []);
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
                        <Link className="nav-link text-light" to={props.url}>
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
                        <ProfileContext.Consumer>
                            {user => {
                                return loading ? (
                                    <div className="d-flex align-items-center justify-content-center mr-5">
                                        <Spinner
                                            animation="grow"
                                            variant="light"
                                            size="sm"
                                        />
                                        <Spinner
                                            animation="grow"
                                            variant="light"
                                            size="sm"
                                        />
                                        <Spinner
                                            animation="grow"
                                            variant="light"
                                            size="sm"
                                        />
                                    </div>
                                ) : (
                                    <Link
                                        className="text-light d-flex align-items-center justify-content-center mr-2"
                                        to={`${props.url}/profile`}
                                    >
                                        <img
                                            src="https://img.icons8.com/plasticine/2x/user.png"
                                            className="d-inline-block align-top"
                                            width="30"
                                            height="30"
                                            rounded="true"
                                        />{" "}
                                        {`${user.title} ${user.first_name} ${user.last_name}`}
                                    </Link>
                                );
                            }}
                        </ProfileContext.Consumer>

                        <SignOutBtn className="text-light d-flex align-items-center justify-content-center" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavHeader;
