import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import "./App.css";
import ContactPage from "./pages/ContactPage";
import {HomePage} from "./pages/HomePage";
import {HeaderWithRouter} from "./components/header/header";
import {PortfolioPage} from './pages/PortfolioPage';
import {MyCVPage} from './pages/MyCVPage'

export class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderWithRouter />
        <Switch>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/my_cv">
            <MyCVPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
