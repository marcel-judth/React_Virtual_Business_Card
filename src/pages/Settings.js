import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Discounts from '../components/settings/discounts/Discounts';
import SettingsNav from '../components/settings/SettingsNav';
import UserEdit from '../components/settings/userEdit/UserEdit';
import ChangePassword from '../components/settings/changePassword/ChangePassword';
import Statistics from '../components/settings/statistics/Statistics';
import { useEffect } from 'react';
import ChangeEmail from '../components/settings/changeEmail/changeEmail';
import DeleteAccount from '../components/settings/deleteAccount/DeleteAccount';
import Logout from './Logout';

const Settings = ({ setTheme }) => {
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    setTheme({ navWhiteColor: false });
  }, [setTheme]);

  return (
    <SettingsWrapper>
      <div className='nav'>
        <SettingsNav
          setNavStatusFunction={setNavActive}
          navStatus={navActive}
          dropdownActive={dropdownActive}
          setDropdownActive={setDropdownActive}
        />
      </div>
      <main
        onClick={() => {
          setNavActive(false);
          setDropdownActive(false);
        }}
      >
        <Switch>
          <Route path='/settings' exact component={UserEdit} />
          <Route path='/settings/changepassword' component={ChangePassword} />
          <Route path='/settings/changeemail' component={ChangeEmail} />
          <Route path='/settings/logout' component={Logout} />
          <Route path='/settings/statistics' component={Statistics} />
          <Route path='/settings/discounts' component={Discounts} />
          <Route path='/settings/deleteaccount' component={DeleteAccount} />
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
    max-height: 100vh;
    overflow: scroll;
  }

  @media (max-width: 600px) {
    .nav {
      position: absolute;
    }
  }
`;

export default Settings;
