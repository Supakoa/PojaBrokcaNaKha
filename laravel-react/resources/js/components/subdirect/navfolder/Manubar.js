import React from 'react';
import './navbarStyle.css';
import {Link} from 'react-router-dom';

export default function Manubar(){
    return(
        <div className="navManu">

            <ul>
                <Link to="/" >
                    <li>หน้าแรก</li>
                </Link>
                <Link to="/message" >
                    <li>ข้อความ</li>
                </Link>
                <Link to="/report" >
                    <li>เอกสาร</li>
                </Link>
                <Link to="/user" >
                    <li>สมาชิก</li>
                </Link>
                <Link to="/news" >
                    <li>ข่าว</li>
                </Link>
                <Link to="/stepreport" >
                    <li>ขั้นตอนอกสาร</li>
                </Link>
            </ul>
        </div>
    );
}
