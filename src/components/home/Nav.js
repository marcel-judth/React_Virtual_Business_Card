//styles
import styled from 'styled-components';
//images
import logoImg from '../../img/x-act.me.svg';
import logoPrimary from '../../img/x-act.me-primary.svg';
//router
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

//animation
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Colors } from '../../styles/Colors';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';

const Nav = ({ theme }) => {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <StyledNav theme={theme}>
      <Burger
        className='burger-left'
        direction='right'
        isOpen={navStatus}
        onClick={() => setNavStatus(!navStatus)}
      />

      <Link to='/home'>
        <div className='nav-logo'>
          {theme.navWhiteColor ? (
            <img src={logoImg} alt='logo x-act.me' />
          ) : (
            <img src={logoPrimary} alt='logo x-act.me' />
          )}
        </div>
      </Link>

      <Burger
        direction='right'
        isOpen={navStatus}
        onClick={() => setNavStatus(!navStatus)}
      />

      <ul className={`${navStatus ? 'active' : ''}`}>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to='/home'>Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: location.pathname === '/' ? '100%' : '0%' }}
          />
        </li>
        <li onClick={() => setNavStatus(!navStatus)}>
          <Link to='/redirectShop'>Shop</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{
              width: location.pathname === '/shop' ? '100%' : '0%',
            }}
          />
        </li>
        {user?.token ? (
          <>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to={'/details/' + user.username}>My Page</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname.startsWith(
                    '/details/' + user.username
                  )
                    ? '100%'
                    : '0%',
                }}
              />
            </li>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to={'/discounts'}>Discounts</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname.startsWith('/discounts')
                    ? '100%'
                    : '0%',
                }}
              />
            </li>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to={'/settings'}>Settings</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname === '/settings' ? '100%' : '0%',
                }}
              />
            </li>
          </>
        ) : (
          <>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to='/login'>Login</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname === '/login' ? '100%' : '0%',
                }}
              />
            </li>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to='/register'>Register</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname === '/register' ? '100%' : '0%',
                }}
              />
            </li>
          </>
        )}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  max-width: 100vw;
  height: 5vh;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  padding-top: 2vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;

  a {
    color: white;
    font-weight: 400;
    text-decoration: none;
  }

  .burger-left {
    opacity: 0;
    pointer-events: none;
  }

  .nav-logo {
    width: fit-content;
    img {
      height: 6vh;
      width: auto;
    }
  }

  ul {
    transform: translateX(100%);
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    z-index: 30;
    right: 0%;
    top: 0%;
    min-height: 100vh;
    background: ${Colors.primaryColor};
    opacity: 0.99;
    transition: 0.5s ease;
    max-width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 80%;
    padding-top: 15vh;
    padding-bottom: 10vh;
    display: flex;
    li {
      position: relative;
    }
  }

  ul.active {
    transform: translateX(0%);
    transition: 0.5s ease;
  }

  .burger {
    z-index: 50 !important;
    justify-self: end;
  }

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    z-index: 50;
    background-color: ${(props) =>
      props.theme?.navWhiteColor ? 'white' : Colors.primaryColor};
  }

  .burger.burger-arrow.open .burger-lines,
  .burger.burger-arrow.open .burger-lines:after,
  .burger.burger-arrow.open .burger-lines:before {
    background-color: white;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  border-radius: 2rem;
  background: white;
  opacity: 0.5;
  width: 0%;
  position: absolute;
  bottom: -50%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
