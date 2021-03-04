import React from 'react';
import { HashRouter, Switch, Route} from 'react-router-dom'
import "./App.css";
import {HomePage} from "./pages/HomePage";
import {HeaderWithRouter} from "./components/header/header";
import {PortfolioPage} from './pages/PortfolioPage';
import {MyCVPage} from './pages/MyCVPage';
import { FooterWithRouter } from './components/footer/footer';
import {ContactPage} from "./pages/ContactPage";

export class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <HeaderWithRouter />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/my_cv">
            <MyCVPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <FooterWithRouter />
      </HashRouter>
    );
  }
}
