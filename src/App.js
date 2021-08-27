import Details from './components/details/Details';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Nav from './components/home/Nav';
import Logout from './components/logout/Logout';
import NotFound from './components/notfound/NotFound';
import QrCode from './components/qrcode/QrCode';
import HomeRedirect from './components/homeredirect/HomeRedirect';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ShopRedirect from './components/shop/ShopRedirect';
import Shop from './components/shop/Shop';

function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/home' component={HomeRedirect} />
          <Route path='/login' component={Login} />
          <Route path='/shop' component={Shop} />
          <Route path='/redirectShop' component={ShopRedirect} />
          <Route path='/logout' component={Logout} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/forgotpassword' component={ForgotPassword} exact />
          <Route path='/forgotpassword/:token' component={ForgotPassword} />
          <Route path='/qrcode' component={QrCode} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
