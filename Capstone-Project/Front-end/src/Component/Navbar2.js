import React from 'react';
import '../CSS/Navbar.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../img/download.svg";
import { useSelector } from 'react-redux';


function Navbar2() {

    const custodian = useSelector((state) => state.custodian_log_info.custodian)
    const id = custodian.custodian_id;
    const name = custodian.custodian_name;

    return (
        <div>

            <div>
                <nav className='nav-bar'>
                    <div className="left-div">
                        <img src={logo} alt="logo" />
                    </div>
                    
                    <div className="right">
                        <div class="nav-items">
                            <Link to="/Trade">Trade</Link>
                            <Link to="/Dashboard">Dashboard</Link>
                        </div>
                    </div>
                        
                            <Button>
                            <Link to="/Login" style={{textDecoration: "none", color: "black"}}>
                                Logout
                            </Link>
                            </Button>
                    
                </nav>
            </div>
            <div className="left-info">
                <h5>User ID: {id}</h5><h5> Name: {name}</h5>
            </div>
        </div>
    )
}

export default Navbar2;
