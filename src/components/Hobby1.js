import React from 'react';
import UTRAHACKS from "../assets/img/utra.png"
import img1 from "../assets/img/1.jpg"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.jpg"
import img4 from "../assets/img/4.jpg"

function Hobby1() {
  return (
    <div className="project1-container">
        <img className="utra" src={UTRAHACKS} alt="Poster 1" />

      <div className="row title-row">
        <h1>HeadSpace</h1>
        <h4>Smart helmet that detects impacts, notifies individuals, and supports athlete safety with real-time data and access to doctors reports.</h4>
      </div>
      <div className="row images-row">
      <div class="colmun">
        <img className="head" src={img1} alt="Poster 1" />
        </div>
        <div class="colmun">
        <img className="head" src={img2} alt="Poster 2" />
        </div>
</div>
        <div className="row images-row">

        <div class="colmun">
        <img className="head" src={img3} alt="Poster 3" />
        </div>
        <div class="colmun">
        <img className="head" src={img4} alt="Poster 4" />
        </div>
    </div>
      <ul>
        <li>Developed an impact monitoring system integrating 4 force sensors and an accelerometer within a helmet, connected to an ESP32 microcontroller for real-time data collection.</li>
        <li>Implemented sensor data processing on the ESP32 to compute force, acceleration, and jerk, transmitting results wirelessly to a React-based dashboard via WebSockets.</li>
        <li>Designed a React TypeScript web interface with Auth0 authentication, featuring dedicated views for players, coaches, and doctors to access helmet impact data.</li>
        <li>Integrated Firebase as a cloud database to store historical impact data, allowing doctors to review player history and add medical notes while coaches monitor live impact metrics.</li>
        <li>Engineered a real-time visualization system in React, providing players with historical data insights and safety recommendations based on past impacts.</li>
    </ul>

    <p>Visit project devpost <a href='https://devpost.com/software/headspace-ypr0tc' target="_blank">Here</a></p>
    <p>Visit project github <a href='https://github.com/artin59/Pengin-3.0' target="_blank">Here</a></p>

    </div>
  );
}

export default Hobby1;
