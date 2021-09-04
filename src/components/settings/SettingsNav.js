import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FaLock, FaUser } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { VscChromeClose } from 'react-icons/vsc';

const SettingsNav = ({ setNavStatus, navStatus }) => {
  return (
    <SettingsNavWrapper>
      <div className={navStatus ? ' sticky-nav active' : 'sticky-nav'}>
        <VscChromeClose
          className='close-icon'
          onClick={() => setNavStatus(false)}
        />
        <ul>
          <li onClick={() => setNavStatus(!navStatus)}>
            <Link className='link' to='/settings'>
              <FaUser className='icon' />
              User Profile
            </Link>
          </li>
          <li onClick={() => setNavStatus(!navStatus)}>
            <Link className='link' to='/settings/changePassword'>
              <FaLock className='icon' />
              Change Password
            </Link>
          </li>
          <li onClick={() => setNavStatus(!navStatus)}>
            <Link className='link' to='/settings/support'>
              <BsFillChatFill className='icon' />
              Support
            </Link>
          </li>
          <li onClick={() => setNavStatus(!navStatus)}>
            <Link className='link' to='/settings/logout'>
              <RiLogoutBoxFill className='icon' />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </SettingsNavWrapper>
  );
};

const SettingsNavWrapper = styled.div`
  .active {
    left: 0% !important;
  }

  .close-icon {
    position: absolute;
    top: 3rem;
    left: 80%;
    font-size: 2rem;
    color: lightgrey;
    z-index: 2;
    display: none;
  }

  .sticky-nav {
    position: sticky;
    top: 10%;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    background: black;
    min-width: 25rem;
    width: 20vw;
    min-height: 90vh;
    margin-top: 10vh;
    padding: 20vh 5vw;
    transition: all 0.75s ease-out;
    .link {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }

    li {
      position: relative;
    }

    .icon {
      margin-right: 0.75rem;
    }
  }

  @media (max-width: 920px) {
    .sticky-nav {
      position: absolute;
      left: -100%;
      top: 0%;
      min-width: 20rem;
      .link {
        font-size: 1rem;
      }
    }
    .close-icon {
      display: block;
    }
  }
`;

export default SettingsNav;
