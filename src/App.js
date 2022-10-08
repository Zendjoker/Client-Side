
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// import Compronents 
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/Profile/Profile'
import Home from './pages/home/Home';


function App() {

  const { user } = useContext(AuthContext);
  
  
  return (
        <Router>
          <Switch>
          <Route exact path="/">
          {user ? <Home/> : <Login/>}
        </Route>
    <Route path="/home">
            {user ? <Home/> : <Redirect to="/login"/>} 
    </Route>

    <Route path="/login">
            {user ? <Redirect to="/" /> : <Login />}
    </Route>

    <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
    </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>

        <Route path="/Logout"><Login/></Route>
        <Route path="/Registerr"><Register/></Route>
        
      </Switch>
    </Router>
  
  );
}

export default App;
