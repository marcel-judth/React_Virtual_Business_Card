import styled from 'styled-components';

import { FaChartLine, FaLock, FaUser } from 'react-icons/fa';
import { FiPercent } from 'react-icons/fi';
import { BsArrowRightShort, BsFillChatFill } from 'react-icons/bs';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { IoIosWifi } from 'react-icons/io';
import { Colors } from '../../styles/Colors';
import NavItem from '../nav/NavItems';

const SettingsNav = ({ setNavStatus, navStatus }) => {
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
          Icon={<IoIosWifi className='rotated' />}
          pathname='/settings/additem'
          link='/settings/additem'
          text=''
        />
        <NavItem
          setNavStatus={setNavStatus}
          navStatus={navStatus}
          Icon={<FaLock />}
          pathname='/settings/changePassword'
          link='/settings/changePassword'
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

  .rotated {
    transform: rotate(90deg);
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
