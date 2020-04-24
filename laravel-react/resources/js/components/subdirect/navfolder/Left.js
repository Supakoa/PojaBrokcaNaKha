import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";

export default function Left(){
    return(
        <ListGroup variant="flush">
            <Link className="text-dark" to="/" >
                <ListGroup.Item action variant="light">หน้าแรก</ListGroup.Item>
            </Link>
            <Link className="text-dark" to="/message" >
                <ListGroup.Item action variant="light">ข้อความ</ListGroup.Item>
            </Link>
            <Link className="text-dark" to="/report" >
                <ListGroup.Item action variant="light">เอกสาร</ListGroup.Item>
            </Link>
            <Link className="text-dark" to="/user" >
                <ListGroup.Item action variant="light">สมาชิก</ListGroup.Item>
            </Link>
            <Link className="text-dark" to="/news" >
                <ListGroup.Item action variant="light">ข่าว</ListGroup.Item>
            </Link>
            <Link className="text-dark" to="/stepreport" >
                <ListGroup.Item action variant="light">ขั้นตอนอกสาร</ListGroup.Item>
            </Link>
        </ListGroup>
    );
}
