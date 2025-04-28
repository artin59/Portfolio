import React from 'react';
import projImg2 from "../assets/img/houseprice.jpg";

function Project2() {
  return (
    <div className="project1-container">

      <div className="row title-row">
        <h1><strong>Showcase 2:</strong> Interview</h1>
      </div>

      <div className="row images-row">
        <img className="placeholder-image" src={projImg2} />
      </div>

      <div className="row text-row">
        <p>I chose my mock interview because it perfectly showcases my communication skills. It allowed me to demonstrate my verbal communication, my ability to think fast on my feet in a professional context. Interviews are really stressful things, but the more you practice them the better you get at conveying your thoughts in a professional tone. During the preparation portion of the interview after each attempt I got better at improving my pacing, body language and also the contents of my answers. This assignment definitely pushed me out of my comfort zone. Speaking to a screen felt awkward and nerve-wracking at first, also because I wasn’t talking to a real person, it was hard to gauge how I was doing. But after multiple practice attempts, I got more comfortable and confident to proceed with the actual interview. I think I did a very good job at understanding the questions I was asked, and relating them to my experiences in the short amount of time that I was given. In a real interview I would only have a fraction of that time to prepare a well thought out answer, so there is definitely room for improvement.
        </p>
      </div>
    </div>
  );
}

export default Project2;
