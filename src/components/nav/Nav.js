//styles
import styled from 'styled-components';
//images
import logoImg from '../../img/x-act.me.png';
import logoPrimary from '../../img/x-act.me-alt.png';
//router
import { HashLink as Link } from 'react-router-hash-link';

//animation
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Colors } from '../../styles/Colors';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import { HiHome } from 'react-icons/hi';
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import NavItem from './NavItems';
import { RiSettings3Fill } from 'react-icons/ri';

const Nav = ({ theme }) => {
  const [navStatus, setNavStatus] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const listVariants = {
    hidden: {
      x: '100%',
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
    show: {
      x: 0,
      transition: { staggerChildren: 0.25, delayChildren: 0.5 },
    },
  };

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

      <motion.ul
        variants={listVariants}
        initial={false}
        animate={navStatus ? 'show' : 'hidden'}
      >
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<HiHome />}
          pathname='/'
          link='/home'
          text='Home'
        />
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<FaShoppingBag />}
          pathname='/shop'
          link='/redirectShop'
          text='Shop'
        />
        {user?.token ? (
          <>
            <NavItem
              setNavStatus={setNavStatus}
              navStatus={navStatus}
              Icon={<FaUserAlt />}
              pathname={'/mypage'}
              link={'/mypage'}
              text='My Page'
            />

            <NavItem
              setNavStatus={setNavStatus}
              navStatus={navStatus}
              Icon={<RiSettings3Fill />}
              pathname='/settings'
              link='/settings'
              text='Settings'
            />
          </>
        ) : (
          <>
            <NavItem
              setNavStatus={setNavStatus}
              navStatus={navStatus}
              Icon={<FaUserAlt />}
              pathname='/login'
              link='/login'
              text='Login'
            />

            <NavItem
              setNavStatus={setNavStatus}
              navStatus={navStatus}
              Icon={<FaUserAlt />}
              pathname='/register'
              link='/register'
              text='Register'
            />
          </>
        )}
      </motion.ul>
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

  .burger-left {
    opacity: 0;
    pointer-events: none;
  }

  .nav-logo {
    width: fit-content;
    img {
      height: 6vh;
      width: auto;
      margin-left: 25px;
    }
  }

  ul {
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    z-index: 30;
    right: 0%;
    top: 0%;
    min-height: 100vh;
    background: black;
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

export default Nav;
