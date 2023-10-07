import { Link } from 'react-router-dom';

import './NavBar.css';

import { SiIfood } from 'react-icons/si';
import { MdKeyboardArrowDown } from 'react-icons/md';

import useOnlineStatus from '../../common/utils/useOnlineStatus';

const NavBar = () => {
  const onlineStatus = useOnlineStatus();

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
              Online Status: {onlineStatus ? '🟢' : '🔴'}
            </div>
          </li>
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
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
