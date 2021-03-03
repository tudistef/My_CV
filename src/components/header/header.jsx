import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { withRouter } from "react-router-dom";

import { ReactComponent as Logo } from './logo-dslr.svg'

export class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <div className='logo'>
          <Logo />
        </div>
        <div className="shortcuts">
          <NavLink activeClassName="active" to="/" className="button">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/my_cv" className="button">
            My CV
          </NavLink>
          <NavLink activeClassName="active" to="/portfolio" className="button">
            Portfolio
          </NavLink>
          <NavLink activeClassName="active" to="/contact" className="button">
            Contact
          </NavLink>
        </div>
      </nav>
    );
  };
};

export const HeaderWithRouter = withRouter(Header);