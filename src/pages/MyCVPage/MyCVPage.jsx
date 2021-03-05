import React from "react";
import { withRouter } from "react-router-dom";
import "../MyCVPage/MyCVPage.css";

class MyCV extends React.Component {
  render() {
    return (
      <div className="right">
        <div className="paragraph1">
          <h3>My CV </h3>
          <p>
            <ul>
              <li>
                At this moment I am studying at the Informal School of IT in Cluj-Napoca 
                the JavaScript course
              </li>
              <li>I have learned to utilize JavaScript, HTML, CSS and React</li>
              <li>
                I am a dedicated and eficient person, these atributes are aknowledged and 
                proven by the course that I am graduating now for JavaScript
              </li>
              <li>
                Until this moment I ca say that at all the jobs my comunication with other
                coleagues and my managers has been grate and there have been no complains
              </li>
            </ul>
          </p>
          <h3>Informatii personale:</h3>
          <p>
            <ul>
              <li>
                I am a young determined person, who is a true believer of smart and productive
                work-flow 
              </li>
              <li>
                <span id="course-name">Languages: </span>English, German, Romanian
              </li>
              <li>
                <span id="course-name">Hobbies: </span>Photography, Traveling and discovering 
                new places and people
              </li>{" "}
            </ul>
          </p>
        </div>
        <hr></hr>
        <div className="paragraph1">
          <h3>Experienta profesionala</h3>
          <h4 id="company-name" className="jobTitle">
            E-ON Business - Master Data Team
          </h4>
          <p>
            <ul>
              <li>SAP Master Data approvals in the system</li>
              <li>
                Constant comunication with all the intercompanies that E-ON has
              </li>
              <li>Interaction with the employies from other countries</li>
              <li>Constant contribution in the team for a consistent growth</li>
            </ul>
          </p>
          <h4 id="company-name" className="jobTitle">
            Accesa IT Systems
          </h4>
          <p>
            <ul>
              <li>Monitoring 24/7 of the servers, applications and websites as  
                SAP, Cronacle, EDI
              </li>
              <li>
                EDI and Cronacle Admin
              </li>
              <li>Deployments on the Test and Production servers</li>
            </ul>
          </p>
        </div>
        <hr></hr>
        <div className="paragraph1">
          <h3>Educatie</h3>
          <table className="educatieTab">
            <tr id="heading">
              <td>Schools</td>
              <td>Year</td>
            </tr>
            <tr>
              <td>Colegiul National "George Cosbuc" - Cluj-Napoca</td>
              <td>2011</td>
            </tr>
            <hr></hr>
            <tr>
              <td>FSEGA - International Management</td>
              <td>2014</td>
            </tr>
            <hr></hr>
            <tr>
              <td>Technische Universitat Wien</td>
              <td>N/A</td>
            </tr>
          </table>
          <h3>Cursuri </h3>
          <p>
            <ul>
              <li>
                <span id="course-name">
                  JavaScript - Scoala Informala de IT
                </span>{" "}
              </li>
            </ul>
          </p>
          <h3>Technical Skills</h3>
          <p>
            <ul>
              <li>
                <span id="course-name">Operating Systems:</span> Windows 98,
                Windows XP, Windows NT, Windows Server 2003, Windows Vista,
                Windows 7, Macintosh Computers (OS X)
              </li>
              <li>
                <span id="course-name">Applications: </span> Office 2019; Office for
                Mac 2019, Visual Studio Code,
              </li>
              <li>
                <span id="course-name">Programing languages: </span>HTML, CSS,
                React, JavaScript.
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export const MyCVPage = withRouter(MyCV);
