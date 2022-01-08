import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import '../../styles/layout/Navbar.css';

const Navbar = () => {

    const [responsive, setResponsive] = useState('navbar-links');
    const [scrollFormatClass, setScrollFormatClass] = useState('main-navbar')

    //CREATE 'HAMBURGER MENU'
    function expandMenu() {
        if (responsive === 'navbar-links') {
            setResponsive('navbar-links responsive')
        } else {
            setResponsive('navbar-links')
        };

        document.getElementById('responsiveMenu').className = responsive;
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY !== 0) {
            document.getElementById('pageHeader').className = 'main-navbar scrolledHeader';
            document.getElementById('title').className = 'title formatedTitle';
            document.querySelectorAll('.logo').forEach(item => {
                item.classList.add('formatedLogo');
            });
        } else {
            document.getElementById('pageHeader').className = 'main-navbar';
            document.getElementById('title').className = 'title';
            document.querySelectorAll('.logo').forEach(item => {
                item.classList.remove('formatedLogo');
            });

        }
    });

    return (
        <nav className="main-navbar" id='pageHeader'>
            <ul className="navbar-icons">
                <a href='https://facebook.com/' className="fab fa-facebook social-icon clickable link" target='_blank'></a>
                <a href='https://instagram.com/' className="fab fa-instagram social-icon clickable link" target='_blank'></a>
                <a href='https://twitter.com/' className="fab fa-twitter social-icon clickable link" target='_blank'></a>
            </ul>
            <div id='navbar-title'>
                <Logo />
                <span className='title' id='title'>Martial World</span>
            </div>
            <ul className="navbar-links" id='responsiveMenu'>
                <a className="clickable a" onClick={expandMenu}><i className="fa fa-bars link" /></a>
                <NavLink to='/' className="clickable link">Home</NavLink>
                <NavLink to='/Blog' className="clickable link">Blog</NavLink>
                <NavLink to='/Schools' className="clickable link">Schools</NavLink>
                <NavLink to='/AboutUs' className="clickable link">About us</NavLink>
                <NavLink to='/Login' className="clickable link">Login</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;

