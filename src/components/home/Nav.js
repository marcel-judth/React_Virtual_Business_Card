//styles
import styled from 'styled-components';
//images
import logoImg from '../../img/logo.png';
//router
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

//animation
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Colors } from '../../styles/Colors';

const Nav = () => {
  const location = useLocation();
  const [navStatus, setNavStatus] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <StyledNav>
      <Link to='/home'>
        <div className='nav-logo'>
          <img src={logoImg} alt='logo x-act.me' />
          X-Act.me
        </div>
      </Link>

      <Burger
        className={`burger ${navStatus ? 'toggle' : ''}`}
        onClick={() => setNavStatus(!navStatus)}
      >
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
      </Burger>

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
        {user ? (
          <>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to={'/details/' + user.email}>My page</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width: location.pathname.startsWith('/details/' + user.email)
                    ? '100%'
                    : '0%',
                }}
              />
            </li>
            <li onClick={() => setNavStatus(!navStatus)}>
              <Link to={'/logout'}>Logout</Link>
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{
                  width:
                    location.pathname === '/logout' + user.email
                      ? '100%'
                      : '0%',
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
          </>
        )}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  min-height: 5rem;
  height: 10vh;
  max-height: auto;
  max-width: 100vw;
  width: 100%;
  display: flex;
  position: fixed;
  background: white;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10vw;
  z-index: 10;
  img {
    height: 5vh;
    min-height: 2rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 60%;
  }
  li {
    position: relative;
  }
  a {
    color: ${Colors.textColor};
    font-weight: 400;
    text-decoration: none;
  }

  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    img {
      height: 8vh;
      width: auto;
    }
  }

  .toggle {
    .line1 {
      transform: rotateZ(45deg) translateY(480%);
    }
    .line3 {
      transform: rotateZ(-45deg) translateY(-480%);
    }
    .line2 {
      opacity: 0;
    }
  }
  @media (max-width: 800px) {
    padding: 0rem 2.5rem;
    ul {
      transform: translateX(100%);
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      right: 0%;
      top: 0%;
      height: 100vh;
      background: black;
      opacity: 0.95;
      align-items: center;
      width: 80%;
      transition: 0.5s ease;
    }
    ul.active {
      transform: translateX(0%);
      transition: 0.5s ease;
    }
    .burger {
      display: block;
    }
  }
`;

const Burger = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 10;
  span {
    padding: 0.1rem 1.2rem;
    background: ${Colors.textColor};
    margin: 0.5rem 0rem;
    display: block;
    transition: all 0.5s ease;
  }
`;

const Line = styled(motion.div)`
  height: 0.2rem;
  border-radius: 2rem;
  background: ${Colors.textColor};
  opacity: 0.5;
  width: 0%;
  position: absolute;
  bottom: -50%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
