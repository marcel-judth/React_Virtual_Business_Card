import Details from './components/details/Details';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Nav from './components/home/Nav';
import Logout from './components/logout/Logout';

function App() {
  return (
    <Router>
      <div className='App'>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/details/:id' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
