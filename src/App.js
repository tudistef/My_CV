import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import "./App.css";
import ContactPage from "./pages/ContactPage";
import {HomePage} from "./pages/HomePage";
import {HeaderWithRouter} from "./components/header/header";
import {PortfolioPage} from './pages/PortfolioPage';
import {MyCVPage} from './pages/MyCVPage'
import { FooterWithRouter } from './components/footer/footer';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
        <FooterWithRouter />
      </BrowserRouter>
    );
  }
}
