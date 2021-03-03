import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import selfpicture from "../Iloaie_Stefan.jpg";
import "./HomePage.css";
import css from "../components/Icons/css.jpg";
import html from "../components/Icons/html.png";
import js from "../components/Icons/js.png";
import react from "../components/Icons/react.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Iloaie Stefan Tudor</h3>
        <p>Sunt o persoana dedicata si eficienta. 
          Aceste atribute sunt dovedite de cursurile urmate pana in acest 
          moment si constanta dorinta de a evolua mai departe</p>
        <img className="picture" src={selfpicture} />
        <p className="icons">
          <img className="css" src={css} />
          <img className="html" src={html} />
          <img className="js" src={js} />
          <img className="react" src={react} />
        </p>
      </div>
    );
  }
}

export const HomePage = withRouter(Home);
