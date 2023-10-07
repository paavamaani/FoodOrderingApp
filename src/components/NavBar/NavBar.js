import { Link } from 'react-router-dom';

import './NavBar.css';

import { SiIfood } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TfiUser } from 'react-icons/tfi';
import { FaOpencart } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header className='header'>
      <div className='navbar'>
        <a href='/' className='logo'>
          <SiIfood size='32' />
        </a>
        <div className='location'>
          <span className='location-text'> Bengaluru, Karnataka, India </span>
          <span className='arrow-down'>
            <MdKeyboardArrowDown size='23' />
          </span>
        </div>
        <ul className='nav-list'>
          <li className='nav-items'>
            <div className='nav-item'>
              <Link className='link' to='/'>
                Home
              </Link>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <Link className='link' to='/about'>
                About
              </Link>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <Link className='link' to='/contact'>
                Contact
              </Link>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <a className='link'>
                <span className='link-icon'>
                  <TfiUser size='18' />
                </span>
                <span> Sign in </span>
              </a>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <a className='link'>
                <span className='link-icon'>
                  <FaOpencart size='18' />
                </span>
                <span> Cart </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
