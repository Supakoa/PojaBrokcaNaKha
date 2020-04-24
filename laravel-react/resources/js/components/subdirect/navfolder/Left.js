import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";

export default function Left(){
    return(
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Link className="text-dark" to="/" >
                    หน้าแรก
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link className="text-dark" to="/message" >
                    ข้อความ
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link className="text-dark" to="/report" >
                    เอกสาร
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link className="text-dark" to="/user" >
                    สมาชิก
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link className="text-dark" to="/news" >
                    ข่าว
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link className="text-dark" to="/stepreport" >
                    ขั้นตอนอกสาร
                </Link>
            </ListGroup.Item>
        </ListGroup>
    );
}
