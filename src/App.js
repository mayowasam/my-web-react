import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import './App.css';
import About from './About';
import Writings from './Writings';

function App() {
  return (

    <Router>

      <Switch>

        <Route path="/writings" component={Writings} />
        <Route path="/projects" render={() => <h1>Projects</h1>} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />

      </Switch>

    </Router>
  );
}

export default App;
