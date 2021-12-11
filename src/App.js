import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Login from './pages/Login';
import Activation from './pages/Activation';
import Register from './pages/Register';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import InvalidLicense from './pages/InvalidLicense';
import ForgotPassword from './pages/ForgotPassword';
import QrCode from './pages/QrCode';
import Details from './pages/Details';
import Settings from './pages/Settings';
import PlanCheckout from './pages/PlanCheckout';
import ComparePlans from './pages/ComparePlans';
import Nav from './components/nav/Nav';

function App() {
  const [theme, setTheme] = useState({ navWhiteColor: false });
  const [navStatus, setNavStatus] = useState(false);

  return (
    <Router>
      <AppWrapper className='App'>
        <GlobalStyles />
        <Nav
          theme={theme}
          setTheme={setTheme}
          navStatus={navStatus}
          setNavStatus={setNavStatus}
        />
        <div onClick={() => setNavStatus(false)}>
          <Switch>
            <Route path='/'>
              <Details mypage theme={theme} setTheme={setTheme} />
            </Route>
            <Route path='/login'>
              <Login setTheme={setTheme} />
            </Route>
            <Route path='/activation/:id'>
              <Activation setTheme={setTheme} />
            </Route>
            <Route path='/register'>
              <Register setTheme={setTheme} theme={theme} />
            </Route>
            <Route path='/logout' component={Logout} />
            <Route path='/notfound' component={NotFound} />
            <Route path='/invalidlicense' component={InvalidLicense} />
            <Route path='/forgotpassword' component={ForgotPassword} exact />
            <Route path='/forgotpassword/:token' component={ForgotPassword} />
            <Route path='/qrcode' component={QrCode} />
            <Route path='/details/:id' component={Details} />
            <Route path='/mypage'>
              <Details mypage theme={theme} setTheme={setTheme} />
            </Route>
            <Route path='/settings'>
              <Settings setTheme={setTheme} />
            </Route>
            <Route path='/plancheckout'>
              <PlanCheckout />
            </Route>
            <Route path='/compareplans' component={ComparePlans} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </AppWrapper>
    </Router>
  );
}

const AppWrapper = styled.div`
  overflow: hidden;
`;

export default App;
