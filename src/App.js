import './App.css';
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './auth/Login';
import Profile from './pages/Profile';
import Followers from './pages/Followers';
import Following from './pages/Following.js';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function App() {
  return (
  <Router history={history}>
  <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/followers" component={Followers} />
        <Route path="/following" component={Following} />
      </Switch>
  </div>
  </Router>
  );
}

// export default App;
