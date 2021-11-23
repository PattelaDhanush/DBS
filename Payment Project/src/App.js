import React, { Fragment } from 'react';
import './App.css';
import landing from './components/home/landing'
import Navbar from './components/home/Navbar'
import transfer from './components/home/transfer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        
        <Route exact path="/" component={landing}/>
          <section className="container">
            <Switch>
              <Route exact path="/transfer" component={transfer}/>
            </Switch>
          </section>

      </Fragment>
    </Router>
  );
}

export default App;
