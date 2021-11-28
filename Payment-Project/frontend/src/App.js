import React, { Fragment } from 'react';
import './App.css';
import landing from './components/home/landing'
import Navbar from './components/home/Navbar'
import Transfer from './components/home/Transfer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from './components/home/Dashboard';
import Receipt from './components/home/Receipt';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        
        <Route exact path="/" component={landing}/>
          <section className="container">
            <Switch>
              <Route exact path="/transfer" component={Transfer}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/receipt/:transaction_Id" component={Receipt}></Route>
            </Switch>
          </section>

      </Fragment>
    </Router>
  );
}

export default App;
