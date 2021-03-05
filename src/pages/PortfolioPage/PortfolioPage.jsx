import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import "../PortfolioPage/PortfolioPage.css";
import Button from "@material-ui/core/Button";
import GitHub from "../../assets/iconmonstr-github-1.svg";
import RockPaperScrissors from "../../rockPaperScissor.jpg";
import BooksPicture from "../../books.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Projects">
        <div className="Project1">
          <img className="picture" src={RockPaperScrissors} />
          <div className="button">
            <Button
              size="small"
              href="https://github.com/tudistef/SIIT_Stefan_Tudor_Iloaie/tree/master/Week%206%20-%20Rock%2C%20Paper%20Scrissors%20Game"
              target="_blank"
            >
              <img src={GitHub} />
              <p>GitHub</p>
            </Button>
          </div>
        </div>
        <div className="Project2">
          <img className="picture" src={BooksPicture} />
          <div className="button">
            <Button
              size="small"
              href="https://github.com/tudistef/SIIT_Stefan_Tudor_Iloaie/tree/master/week%206%20-%20DOM%20-%20Workshop/book-list"
              target="_blank"
            >
              <img src={GitHub} />
              <p>GitHub</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export const PortfolioPage = withRouter(Portfolio);
