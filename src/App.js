import Details from './components/details/Details';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import Logout from './components/logout/Logout';
import NotFound from './components/notfound/NotFound';
import QrCode from './components/qrcode/QrCode';
import HomeRedirect from './components/homeredirect/HomeRedirect';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ShopRedirect from './components/shop/ShopRedirect';
import Shop from './components/shop/Shop';
import Settings from './components/settings/Settings';
import Register from './components/register/Register';
import PlanCheckout from './components/planCheckout/PlanCheckout';
import InvalidLicense from './components/invalidLicense/InvalidLicense';
import { useState } from 'react';
import MyPage from './components/MyPage/MyPage';
import Activation from './components/activation/Activation';

function App() {
  const [theme, setTheme] = useState({ navWhiteColor: false });

  return (
    <Router>
      <div className='App'>
        <GlobalStyles />
        <Nav theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path='/' exact>
            <Home setTheme={setTheme} theme={theme}></Home>
          </Route>
          <Route path='/home' component={HomeRedirect} />
          <Route path='/login'>
            <Login setTheme={setTheme} />
          </Route>
          <Route path='/activation/:id'>
            <Activation setTheme={setTheme} />
          </Route>
          <Route path='/register'>
            <Register setTheme={setTheme} />
          </Route>
          <Route path='/shop' component={Shop} />
          <Route path='/redirectShop' component={ShopRedirect} />
          <Route path='/logout' component={Logout} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/invalidlicense' component={InvalidLicense} />
          <Route path='/forgotpassword' component={ForgotPassword} exact />
          <Route path='/forgotpassword/:token' component={ForgotPassword} />
          <Route path='/qrcode' component={QrCode} />
          <Route path='/details/:id' component={Details} />
          <Route path='/mypage'>
            <MyPage setTheme={setTheme} />
          </Route>
          <Route path='/settings'>
            <Settings setTheme={setTheme} />
          </Route>
          <Route path='/plancheckout' component={PlanCheckout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
