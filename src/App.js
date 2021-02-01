import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./modules/home/index";
import Navbar from "./modules/NavBar/index";
import Auth from "./modules/Auth/index";


function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/"> <Navbar /><Home /> </Route>
      <Route exact path="/login"><Navbar /> <Auth /></Route>
    </BrowserRouter>
    </>
  );
}

export default App;
