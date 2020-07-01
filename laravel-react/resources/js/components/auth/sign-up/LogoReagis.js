import Logo from "./../../images/logo.png";
import { Image } from "react-bootstrap";
import React from "react";
const LogoRegis = () => {
    return (
        <section className="d-table text-center m-auto">
            <Image
                className="border-bottom border-info"
                src={Logo}
                width="80"
                height="80"
            />
            <p className="text-info">GE Petition</p>
        </section>
    );
};

export default LogoRegis;
