import React, { Fragment } from 'react';
import './App.css';
import landing from './components/home/landing'
import Navbar from './components/home/Navbar'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        
        <Route excat path="/" component={landing}/>
          <section className="container">
            <Switch>
              <route excat path="/" container={landing}/>
            </Switch>
          </section>

      </Fragment>
    </Router>
  );
}

export default App;
