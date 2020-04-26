import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";

export default function Left(){
    const routPath = ['/', '/message', '/report', '/user', '/news', '/stepreport' ]
    const linkClass = "text-dark list-group-item list-group-item-secondary list-group-item-action";

    return(
        <ListGroup variant="flush" className="bg-menu">

            <Link className={linkClass} to={routPath[0]} >
                หน้าแรก
            </Link>
            <Link className={linkClass} to={routPath[1]} >
                ข้อความ
            </Link>
            <Link className={linkClass} to={routPath[2]} >
                เอกสาร
            </Link>
            <Link className={linkClass} to={routPath[3]} >
                สมาชิก
            </Link>
            <Link className={linkClass} to={routPath[4]} >
                ข่าว
            </Link>
            <Link className={linkClass} to={routPath[5]} >
                ขั้นตอนอกสาร
            </Link>
        </ListGroup>
    );
}
