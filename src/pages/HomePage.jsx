import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import selfpicture from '../Iloaie_Stefan.jpg'
import './HomePage.css'


class Home extends React.Component {
    render() {
        return (
         <div>
              <img className='picture' src={selfpicture}/>
         </div>
        );
      }
}

export const HomePage = withRouter(Home)