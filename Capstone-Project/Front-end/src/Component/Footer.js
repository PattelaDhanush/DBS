import React from 'react';
//import '../CSS/Footer.css';

import fbimg from "../img/icon-facebook.svg";
import instaimg from "../img//icon-instagram.svg";
import twitterimg from "../img//icon-twitter.svg";

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-container">
                <div class="social-container">
                    <img src={fbimg} alt="facebook" />
                    <img src={instaimg} alt="instagram" />
                    <img src={twitterimg} alt="twitter" />
                </div>
                <div class="menu">
                    <Link to="/Home">About us</Link>
                    <Link to="/Home">Contact us</Link>
                    <Link to="/Home">Blog</Link>
                </div>
                <div class="menu">
                    <Link to="/Home">Carriers</Link>
                    <Link to="/Home">Support</Link>
                    <Link to="/Home">Privacy Policy</Link>
                </div>
                <button>Request Invite</button>
            </div>
        </footer>
    )
}

export default Footer
