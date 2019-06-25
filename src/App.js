import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Menu from './components/menu';
import Logo from './components/logo';
import About from './components/aboutme';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
            <Logo />
            <Menu />
            <Switch>
              <Route exact path="/" component={About} />
              <Route  path="/experience" component={Experience} />
              <Route  path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
