import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tchat from './components/Tchat'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
   <div>
      <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion">
            <a href="/tchat">tchat</a>          
          </Route>
          <Route path="/tchat">
            <Tchat/>
          </Route>
          <Route exact path="/">
            <Redirect to="/connexion"/>
          </Route>
        </Switch>
    </Router>

    
   </div>
  );
}

export default App;
