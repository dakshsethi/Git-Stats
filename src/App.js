import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './auth/Login';

export default function App() {
  // let loggedIn = localStorage.getItem('personal-access-token');
  return (
    <Router>
      <Switch>
          <Router exact path="/">
            <Login />
          </Router>
        </Switch>
    </Router>
  );
}

// export default App;
