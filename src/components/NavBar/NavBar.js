import './NavBar.css';

import { SiIfood } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
import { BiSupport } from 'react-icons/bi';
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
              <a className='link'>
                <span className='link-icon'>
                  <IoSearchOutline size='18' />
                </span>
                <span> Search </span>
              </a>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <a className='link'>
                <span className='link-icon'>
                  <BiSolidOffer size='18' />
                </span>
                <span> Offers </span>
                <span className='promotion-text'> New </span>
              </a>
            </div>
          </li>
          <li className='nav-items'>
            <div className='nav-item'>
              <a className='link'>
                <span className='link-icon'>
                  <BiSupport size='18' />
                </span>
                <span> Help </span>
              </a>
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
