import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import "./MyCVPage.css";

class MyCV extends React.Component {
  render() {
    return (
      <div class="right">
        <h3>My CV </h3>
        <p>
          <ul>
            <li>
              In acest moment urmez cursul de JavaScript al Scolii informale de
              IT din Cluj-napoca
            </li>
            <li>Am invatat sa utilizez JavaScript, HTML, CSS si React</li>
            <li>
              Sunt o persoana dedicata si eficienta. Aceste atribute sunt
              dovedite de cursurile urmate pana in acest moment si constanta
              dorinta de a evolua mai departe
            </li>
            <li>
              Pana in acest moment pot spune ca la job-urile de pana acum am
              prezentat o comunicare buna atat cu colegii cat si cu Team
              Leaderul.
            </li>
          </ul>
        </p>
        <hr></hr>
        <h3>Experienta profesionala</h3>
        <h4 id="company-name" className="jobTitle">
          E-ON Business Center - Master Data Team
        </h4>

        <p id="job-responsibilities">Responsabilitati</p>
        <p>
          <ul>
            <li>Verificarea insertiilor in baza de date SAP</li>
            <li>
              Corespondenta permanenta cu companiile interne E-ON din intreaga
              lume
            </li>
            <li>Interactiunea cu angajatii externi E-ON</li>
            <li>Contributia constanta in echipa pentru evolutie</li>
          </ul>
        </p>
        <hr></hr>
        <h3>Educatie</h3>
        <table>
          <tr id="heading">
            <td>Scoala absolvita</td>
            <td>Anul</td>
          </tr>
          <tr>
            <td>Colegiul National "George Cosbuc" - Cluj-Napoca</td>
            <td>2011</td>
          </tr>
          <tr>
            <td>FSEGA</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Technische Universitat Wien</td>
            <td>N/A</td>
          </tr>
        </table>
        <hr></hr>
        <h3>Cursuri </h3>
        <p>
          <ul>
            <li>
              <span id="course-name">JavaScript - Scoala Informala de IT</span>{" "}
            </li>
          </ul>
          <hr></hr>
          <h3>Technical Skills</h3>
          <p>
            <ul>
              <li>
                <span id="course-name">Sisteme de operare:</span> Windows 98,
                Windows XP, Windows NT, Windows Server 2003, Windows Vista,
                Windows 7, Macintosh Computers (OS X)
              </li>
              <li>
                <span id="course-name">Aplicatii:</span> Office 2019; Office for
                Mac 2019, Visual Studio Code,
              </li>
              <li>
                <span id="course-name">Limbaje de programare:</span>HTML, CSS,
                React, JavaScript.
              </li>
            </ul>
          </p>
          <hr></hr>
          <h3>Informatii personale:</h3>
          <p>
            <ul>
              <li>
                Sunt o persoana tanara, determinata, care crede in lucrul smart
                si bine structurat.
              </li>
              <li>
                <span id="course-name">Languages:</span>Engleza, Germana, Romana
              </li>
              <li>
                <span id="course-name">Hobbie:</span>Fotografia, Calatoriile si
                Munca de acasa
              </li>{" "}
            </ul>
          </p>
        </p>
      </div>
    );
  }
}

export const MyCVPage = withRouter(MyCV);
