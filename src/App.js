import './App.css';
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './auth/Login';
import Profile from './pages/Profile';
import Followers from './pages/Followers';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function App() {
  return (
    // <Router>
    //   <Switch>
    //       <Router exact path="/">
    //         <Login />
    //       </Router>
    //       <Router exact path="/profile">
    //         <Profile />
    //       </Router>
    //     </Switch>
    // </Router>

  <Router history={history}>
  <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/followers" component={Followers} />
      </Switch>
  </div>
  </Router>
  );
}

// export default App;
