import React from 'react'
import "./Nav.css";
import logo from "./images/logo.png";
import {Link} from "react-scroll";

function Nav() {
    return (
        <section className="Navbar">
            <div className="right__logo">
                <img src={logo} alt="logo" class="nav_logo" />
            </div>
            <div className="left__container__links">
                <Link class="nav_link" to="Landing" smooth={true} duration={1000}>Home</Link>
                <Link class="nav_link" to="About" smooth={true} duration={1000}>About</Link>
                <Link class="nav_link" to="Aware" smooth={true} duration={1000}>More</Link>
                <Link class="nav_link" to="Footer" smooth={true} duration={1000}>Devteam</Link>
            </div>
        </section>
    );
}
export default Nav;