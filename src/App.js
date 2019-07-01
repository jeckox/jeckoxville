import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Menu from './components/menu';
import Logo from './components/logo';
import About from './components/aboutme';
import Education from './components/education';
import Experience from './components/experience';
import Portfolio from './components/portfolio';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-35448741-1');

class App extends Component {
  render() {

    return (
      <div className="App">
        <BrowserRouter>
            <Logo />
            <Menu />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/education" component={Education} />
              <Route  path="/experience" component={Experience} />
              <Route  path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
