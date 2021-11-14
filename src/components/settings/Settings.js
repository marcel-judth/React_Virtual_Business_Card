import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../logout/Logout';
import Discounts from './discounts/Discounts';
import SettingsNav from './SettingsNav';
import UserEdit from './userEdit/UserEdit';
import ChangePassword from './changePassword/ChangePassword';
import Support from './support/Support';
import Statistics from './statistics/Statistics';
import { useEffect } from 'react';
import ChangeEmail from './changeEmail/changeEmail';
import DeleteAccount from './deleteAccount/DeleteAccount';

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
          <Route path='/settings/support' component={Support} />
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
