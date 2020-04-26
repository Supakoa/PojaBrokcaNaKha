import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';
import {ListGroup} from "react-bootstrap";

export default function Left(){

    const datas = [
        {path:"/", name:"หน้าแรก"},
        {path:"/message",name:"ข้อความ"},
        {path:"/report",name:"เอกสาร"},
        {path:"/user",name:"สมาชิก"},
        {path:"/news",name:"ข่าว"},
        {path:"/stepreport",name:"ขั้นตอนอกสาร"}]

    return(
        <ListGroup variant="flush" className="bg-menu">
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/" >
                หน้าแรก
            </Link>
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/message" >
                ข้อความ
            </Link>
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/report" >
                เอกสาร
            </Link>
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/user" >
                สมาชิก
            </Link>
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/news" >
                ข่าว
            </Link>
            <Link className="text-dark list-group-item list-group-item-secondary list-group-item-action" to="/stepreport" >
                ขั้นตอนอกสาร
            </Link>
        </ListGroup>
    );
}
