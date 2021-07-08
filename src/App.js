import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from './auth/login';

export default function App() {
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
