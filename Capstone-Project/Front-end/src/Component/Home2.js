import React from 'react';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';
import img1 from "../img/icon-online.svg";
import img2 from "../img/icon-budgeting.svg";
import img3 from "../img/icon-onboarding.svg";
import img4 from "../img/icon-api.svg";

import fbimg from "../img/icon-facebook.svg";
import instaimg from "../img/icon-instagram.svg";
import twitterimg from "../img/icon-twitter.svg";

import mainimg from "../img/image-mockups.png";

import logo1 from "../img/download.svg";


function Home2() {

    
    return (
        <div>
            <div>
                <nav className='nav-bar'>
                    <img src={logo1} alt="logo" />
                    <div class="nav-items">
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Career</Link>
                    </div>
                    <button><Link to="Login" style={{textDecoration: "none", color: "black"}}>
                        Login
                        </Link></button>
                </nav>
            </div>

            <div>
                <header class="hero-section">
                    <div class="hero-text-container">
                        <h1>
                            Next generation <br /> Trading Website
                        </h1>

                        <p>
                            Take your financial life online. Your 6E Trader account<br />
                            will be a one-stop-shop for Trading,<br />budgeting,investing,
                            and much more.
                        </p>

                        <button>Request Invite</button>
                    </div>

                    <div class="hero-image-container">
                        <img src={mainimg} alt="Home" />

                    </div>
                </header>
            </div>
            <div class="container">
                <section class="why-us">
                    <h1>
                        Why Choose 6E Trader?
                    </h1>
                    <p>We leverage trading to turn your bank account into your
                        financial profit hub.<br />Control your finances like never before.</p>
                </section>
                <section class="features-section">
                    <div class="feature-item">
                        <img src={img1} alt="online" />
                        <h1>Hassle Free</h1>
                        <p>Our modern web and mobile<br />
                            applications allow you to keep<br />
                            track of your finances whereever<br />
                            you are in the world.</p>
                    </div>
                    <div class="feature-item">
                        <img src={img2} alt="online" />
                        <h1>Simple Process</h1>
                        <p>See exactly where your money<br />
                            goes every month.Recieve<br />
                            notifications when you're close to<br />
                            hitting your limits.</p>
                    </div>
                    <div class="feature-item">
                        <img src={img3} alt="online" />
                        <h1>Fast Onboarding</h1>
                        <p>We don't do branches.Open your<br />
                            accound minutes online and start<br />
                            taking controll of your finances<br />
                            right away.</p>
                    </div>
                    <div class="feature-item">
                        <img src={img4} alt="online" />
                        <h1>Open API</h1>
                        <p>Manage your savings, investments,<br />
                            pension and much more from one<br />
                            account.Tracking your money has<br />
                            never been easier.</p>
                    </div>
                </section>
            </div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="social-container">
                        <img src={fbimg} alt="facebook" />
                        <img src={instaimg} alt="instagram" />
                        <img src={twitterimg} alt="twitter" />
                    </div>
                    <div class="menu">
                        <Link to="/">About us</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Blog</Link>
                    </div>
                    <div class="menu">
                        <Link to="/">Carriers</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                    <button>Request Invite</button>
                </div>
            </footer>
        </div>
    )
}

export default Home2;
