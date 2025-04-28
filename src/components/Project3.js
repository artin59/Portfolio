import React from 'react';
import technicalreport from "../assets/img/technical report.png"
import technicalreportpdf from "../assets/pdfs/technical report.pdf"

function Project3() {
  return (
    <div className="project1-container">

      <div className="row title-row">
        <h1><strong>Showcase 3:</strong> Technical Report</h1>
      </div>

      <div className="row images-row">
      <a href={technicalreportpdf} download="Technical Report.pdf">  
        <img className="placeholder-image" src={technicalreport} />
        </a>
      </div>

      <div className="row text-row">
        <p>I chose my technical report because I was very proud of it and very interested in the topic I chose. Also because a technical report is all about clearly explaining complex topics to a targeted audience in a structured and professional manner, so it’s a very good example of my communication skills. Since this was my first time writing a technical report, I made tremendous progress as a communicator. During the process of writing this report I developed many skills such as: translating technical concepts/jargon into understandable and simple language (for the executive summary), and brainstorming solutions for existing problems, supporting them with evidence and writing a full comprehensible report by leveraging the 7 C’s of communication. I don’t think this piece pushed me out of my comfort zone. Even though I wasn’t fully familiar with the topic I was writing about I was really invested and interested in it which made researching and communicating it to the intended audience a lot easier. However, that's not to say that it was simple and easy. It was quite difficult for me to write with precision, while also being concise, since my mind would wander and I would waste my time going down rabbit holes for no reason.I think I did a really good job of conveying my research and ideas of the solutions I was offering. However, I had some challenges with writing concisely and with precision. If I were to revise it I would spend more time trying to organize my ideas and have a concrete structure of my report planned out before starting it.
        </p>
      </div>

      <div className="row button-row">
        <a href={technicalreportpdf} download="Technical Report.pdf">  
        <button className="rounded-button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default Project3;
