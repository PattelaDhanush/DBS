import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="nav-button1">
            <h1>  
                <Link to="">  
                    <i className="fa fa-code">DBS Payment</i> 
                </Link>
            </h1>
            </div>
            <div className="nav-button2">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/transfer">Transfer</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="Dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
