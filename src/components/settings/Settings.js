import { useState } from 'react';
import { RiSettings4Fill } from 'react-icons/ri';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import Logout from '../logout/Logout';
import SettingsNav from './SettingsNav';
import UserProfile from './userProfile/UserProfile';
import ChangePassword from './changePassword/ChangePassword';
import Support from './support/Support';

const Settings = (props) => {
  const [navActive, setNavActive] = useState(false);

  return (
    <SettingsWrapper>
      <RiSettings4Fill
        className='settings-icon'
        onClick={() => setNavActive(true)}
      />
      <SettingsNav setNavStatus={setNavActive} navStatus={navActive} />
      <main>
        <Switch>
          <Route path='/settings' exact component={UserProfile} />
          <Route path='/settings/changepassword' component={ChangePassword} />
          <Route path='/settings/support' component={Support} />
          <Route path='/settings/logout' component={Logout} />
        </Switch>
      </main>
    </SettingsWrapper>
  );
};

const SettingsWrapper = styled.div`
  position: relative;
  display: flex;
  main {
    width: 100%;
    position: relative;
  }
  height: fit-content;

  .settings-icon {
    position: absolute;
    top: 15vh;
    left: 8%;
    font-size: 2.5rem;
    z-index: 1;
    color: ${Colors.textColor};
    transition: 0.75s ease-in-out;
    display: none;
    &:hover {
      transform: rotate(-90deg);
    }
  }

  @media (max-width: 920px) {
    .settings-icon {
      display: block;
    }
  }
`;

export default Settings;
