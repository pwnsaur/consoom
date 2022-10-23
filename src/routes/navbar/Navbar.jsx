import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <div className='navigation'>
        <NavLink className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </NavLink>
        <div className='nav-links-container'>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          <NavLink className='nav-link' to='/sign-in'>
            SIGN IN
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
