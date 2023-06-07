import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './Navbar.scss';
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="navbar-2">
                <div className="logo">.Logo</div>
                <nav className={ navbar ? "navbar active" : 'navbar' }>
                    <ul className={click ? "nav active" : "nav"}>
                        <li>
                            <Link to='/' className="link">Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className="link">About</Link>
                        </li>
                        <li>
                            <Link to='/services' className="link">Services</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={handleClick}>
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Navbar;
