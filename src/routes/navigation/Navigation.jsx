import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <NavLink className='nav-link' to='/auth'>
              SIGN IN
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
