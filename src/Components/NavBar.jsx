import React, { useState } from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-scroll'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavBar = () => {

    const [nav,setnav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true)
        }else{
            setnav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='main' smooth={true} duration={1000} className='logo'
        >
            <img src={logo} alt="" />
        </Link>
        <input  className='menu-btn' type="checkbox" id='menu-btn' />
        <label className='menu-icon' htmlFor="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li> <Link to='main' smooth={true} duration={1000}>Home</Link></li>
            <li> <Link to='about' smooth={true} duration={1000}>About Me</Link></li>
            <li> <Link to='feature' smooth={true} duration={1000}>My Projects</Link></li>
            <li> <Link to='#'>Skills</Link></li>
            <li className='socialmedia'>
            <a href="#">
                <FontAwesomeIcon icon={faGithub} size='2xl' color='white' cursor='pointer'/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faLinkedin} size='2xl' color='white'cursor='pointer'/>
            </a>
            </li>
        </ul>
    </nav>
  )
}
