import styled from 'styled-components';

import { FaChartLine, FaUser } from 'react-icons/fa';
import { FiPercent } from 'react-icons/fi';
import { BsArrowRightShort, BsFillChatFill } from 'react-icons/bs';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { Colors } from '../../styles/Colors';
import NavItem from '../nav/NavItems';
import { AiFillSetting } from 'react-icons/ai';
import DropdownItem from '../nav/DropdownItem';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

const SettingsNav = ({ setNavStatus, navStatus }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <SettingsNavWrapper navOpen={navStatus}>
      <ul>
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<FaUser />}
          pathname='/settings'
          link='/settings'
          text=''
        />
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<FaChartLine />}
          pathname='/settings/statistics'
          link='/settings/statistics'
          text=''
        />
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<FiPercent />}
          pathname='/settings/discounts'
          link='/settings/discounts'
          text=''
        />
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<BsFillChatFill />}
          pathname='/settings/support'
          link='/settings/support'
          text=''
        />
        <DropdownItem
          Icon={<AiFillSetting />}
          onClick={() => setDropdownActive(!dropdownActive)}
          pathnames={[
            '/settings/changepassword',
            '/settings/changeemail',
            '/settings/changeplan',
            '/settings/deleteaccount',
          ]}
        >
          <SettingsDropdown
            className={dropdownActive ? 'active' : ''}
            onClick={() => {
              setDropdownActive(!dropdownActive);
              setNavStatus(false);
            }}
          >
            <Link to='/settings/changepassword'>Change Password</Link>
            <Link to='/settings/changeemail'>Change Email</Link>
            <Link to='/settings/changeplan'>Change Plan</Link>
            <Link className='danger' to='/settings/deleteaccount'>
              Delete Account
            </Link>
          </SettingsDropdown>
        </DropdownItem>
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<RiLogoutBoxFill />}
          pathname='/settings/logout'
          link='/settings/logout'
          text=''
        />
      </ul>
      <OpenTag onClick={() => setNavStatus(!navStatus)}>
        <BsArrowRightShort className={navStatus ? 'rotate' : ''} />
      </OpenTag>
    </SettingsNavWrapper>
  );
};

const SettingsDropdown = styled.div`
  position: absolute;
  min-width: 12rem;
  width: auto;
  height: 5rem;
  height: fit-content;
  background: white;
  left: 1.5rem;
  top: 0.2rem;
  border: 1px solid hsla(210, 18%, 87%, 1);
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;

  a {
    color: ${Colors.textColor};
    display: block;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid hsla(210, 18%, 87%, 1);

    &:hover {
      background: hsla(210, 18%, 87%, 1);
    }
  }

  .danger {
    color: ${Colors.warningColor};
  }
`;

const SettingsNavWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${Colors.primaryColor};
  width: 4vw;
  min-width: 4rem;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  z-index: 50;

  .rotated {
    transform: rotate(90deg);
  }

  .active {
    opacity: 1;
    pointer-events: all;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 60vh;
    list-style: none;
  }

  .selected {
    color: ${Colors.primaryColor} !important;
  }

  @media (max-width: 600px) {
    transform: ${(props) =>
      props.navOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const OpenTag = styled.div`
  background: ${Colors.primaryColor};
  width: 2rem;
  height: 3.5rem;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 15%;
  right: -2rem;
  display: none;

  svg {
    transition: 0.5s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export default SettingsNav;
