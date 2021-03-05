import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LinkedIn from "../../assets/iconmonstr-linkedin-3.svg";
import GitHub from "../../assets/iconmonstr-github-1.svg";
import Facebook from "../../assets/iconmonstr-facebook.svg"
import Contact from "../../assets/iconmonstr-contact.svg"
export class Footer extends React.Component {
  render() {
    return (
      <nav className="footer">
        <div className="shortcutsFooter">
        <Button
           onClick={() =>
            this.props.history.push('/contact')
          }
          >
            <img src={Contact} />
          </Button>
          <Button
            size="small"
            href="https://www.linkedin.com/in/stefan-tudor-iloaie-8119859b/"
            target="_blank"
          >
            <img src={LinkedIn} />
          </Button>
          <Button
            size="small"
            href="https://github.com/tudistef"
            target="_blank"
          >
            <img src={GitHub} />
          </Button>
          <Button
            size="small"
            href="https://www.facebook.com/tudor.iloaie/"
            target="_blank"
            className="facebook"
          >
            <img src={Facebook} />
          </Button>
        </div>
      </nav>
    );
  }
}

export const FooterWithRouter = withRouter(Footer);
