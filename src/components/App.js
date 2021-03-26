import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import '../assets/App.css';
import '../index.css';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';
import Error from './Error';
import Calculator from './Calculator';

export default function App() {
  return (
    <main className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quote" component={Quote} />
        <Route exact path="/Calculator" component={Calculator} />
        <Route component={Error} />
      </Switch>
    </main>
  );
}
