import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import selfpicture from "../../Iloaie_Stefan.jpg";
import "../HomePage/HomePage.css";
import css from "../../components/Icons/css.jpg";
import html from "../../components/Icons/html.png";
import js from "../../components/Icons/js.png";
import react from "../../components/Icons/react.png";

class Home extends React.Component {
  render() {
    return (
      <div className="homeView">
        <div className="row1">
          <h3>Hi, I'm</h3>
          <h2>Iloaie Stefan Tudor</h2>
          <h3>- Front-end Developer -</h3>
          <p>
            I am a dedicated an eficient person that can be proved trough the 
            courses that I have finished until know and the wast knowledge got 
            in my last jobs.
          </p>
        </div>
        <div className="row2">
          <img className="picture" src={selfpicture} />
          <p className="icons">
            <img className="css" src={css} />
            <img className="html" src={html} />
            <img className="js" src={js} />
            <img className="react" src={react} />
          </p>
        </div>
      </div>
    );
  }
}

export const HomePage = withRouter(Home);
