import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./modules/home/index";



function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/"> <Home /> </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
