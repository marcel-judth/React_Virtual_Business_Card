import Details from "./components/details/Details";
import GlobalStyles from "./styles/GlobalStyles";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyles />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
