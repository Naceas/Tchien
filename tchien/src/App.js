import React from 'react';
import './App.css';
import Form from './components/Form';
import Tchat from './components/Tchat';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/connexion">
            <Form />
          </Route>
          <Route path="/tchat">
            <Tchat />
          </Route>
          <Route exact path="/">
            <Redirect to="/connexion" />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
