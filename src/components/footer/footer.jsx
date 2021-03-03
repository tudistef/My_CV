import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { withRouter } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <nav className="footer">
       
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

export const FooterWithRouter = withRouter(Footer);