import Login from "./Component/Login"

import Dashboard_admin from "./Component/Dashboard_admin";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Trade from './Component/Trade';
import Dashboard from './Component/Dashboard'
import Home2 from "./Component/Home2";
import Navbar2 from "./Component/Navbar2";
import Navbar1 from "./Component/Navbar1";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      
      <section className="container-start">


        <Switch>
        <Route exact path="/Navbar1" component={Navbar1} />
          <Route exact path="/Navbar2" component={Navbar2} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Home2}/>
          <Route exact path="/Dashboard_admin" component={Dashboard_admin}/>
          <Route exact path="/Trade" component={Trade}/>
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Footer" component={Footer}/>
        </Switch>
      </section>
    </Router>

  );
}

export default App;
