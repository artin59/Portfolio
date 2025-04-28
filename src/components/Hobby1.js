import React from 'react';
import coverletter from "../assets/img/cover letter.png"
import coverletterpdf from "../assets/pdfs/cover lettter.pdf"

function Hobby1() {
  return (
    <div className="project1-container">

      <div className="row title-row">
        <h1><strong>Showcase 1:</strong> Cover Letter</h1>
      </div>

      <div className="row images-row">
      <a href={coverletterpdf} download="CoverLetter.pdf">  
        <img className="placeholder-image" src={coverletter} />
        </a>
      </div>

      <div className="row text-row">
        <p>I chose the cover letter assignment for my showcase because it demonstrates my ability to communicate my strengths, skills and experiences in a way that is specifically tailored to the position I was applying for. Writing  a strong cover letter is an absolute necessity for ensuring success in my future job searches, and will be a very valuable asset forever. By practicing the step-by-step process of making a cover letter, I’ve learned many valuable skills as a communicator. I’ve learned how to become knowledgeable on the company and job description, effectively communicate my skills and experiences by modeling it towards my research in a concise manner (less than a page) and stand out from the crowd. One of the main ways this piece pushed me out of my comfort zone was that it required me to speak confidently about myself and put myself on a high pedestal by trying to sell myself and my experiences which is something I’m not used to doing. For me and I’m sure for a lot of people searching for a job and putting yourself out there is a really stressful thing and writing a cover letter is at the forefront of that. By having a place to practice this skill and getting feedback for it, it allowed me to face that fear and build up my confidence. Overall I think I did a good job of showcasing my skills, expressing my interests and qualifications, and applying the things I learned from the lecture into this assignment. The feedback/grade I got also reiterates this. Based on that feedback, instead of just listing my accomplishments I would say what kind of skills I used in accomplishing those things.
        </p>
      </div>

      <div className="row button-row">
        <a href={coverletterpdf} download="CoverLetter.pdf">  
        <button className="rounded-button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default Hobby1;
