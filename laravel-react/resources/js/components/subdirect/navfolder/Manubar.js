import React from 'react';
import './navbarStyle.css';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

export default function Manubar(){
    return(
        <div className="navManu">
            <div className="w-100">
                <img src={Logo}
                     width="70"
                     height="70"
                     className="mr-auto ml-auto"
                />
            </div>
            <ul>
                <Link to="/" >
                    <li>Home</li>
                </Link>
                <Link to="/user" >
                    <li>User</li>
                </Link>
                <Link to="/step" >
                    <li>Step</li>
                </Link>
            </ul>
        </div>
    );
}
