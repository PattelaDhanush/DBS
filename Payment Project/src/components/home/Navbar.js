import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <h1>  
                <Link to="">  
                    <i className="fas fa-code"></i> DBS Payment
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="transfer">Transfer</Link>
                </li>
                <li>
                    <Link to="Dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}
