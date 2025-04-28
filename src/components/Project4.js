import React from 'react';
import poster from "../assets/img/eng 1102 poster.png"
import pres from "../assets/img/eng1102 pres.png"
import posterpdf from "../assets/pdfs/poster.pdf"
import prespdf from "../assets/pdfs/pres.pptx"

const handleDownload = () => {
  // Create a temporary <a> element for the first file (Poster PDF)
  const link1 = document.createElement('a');
  link1.href = posterpdf;
  link1.download = 'Poster.pdf';
  link1.click(); // Trigger download for the poster PDF
  
  // Create a temporary <a> element for the second file (Presentation PPTX)
  const link2 = document.createElement('a');
  link2.href = prespdf;
  link2.download = 'Presentation.pptx';
  link2.click(); // Trigger download for the presentation PPTX
};

function Project4() {
  return (
    
    <div className="project1-container">

      <div className="row title-row">
        <h1><strong>Showcase 4:</strong> ENG 1102 Design Project   </h1>
      </div>

      <div className="row images-row">
      <div class="column">
        <a href={posterpdf} download="Poster.pdf">
        <img className="placeholder-poster" src={poster} alt="Poster 1" />
        </a>
        </div>
        <div class="column">
        <a href={prespdf} download="Presenation.pptx">
        <img className="placeholder-poster" src={pres} alt="Poster 2" />
        </a>
        </div>
</div>


      <div className="row text-row">
        <p>In this project,  I had to work with a group of my peers to identify a real problem that aligned with one of the United Nations Sustainable Development Goals, and formulate a solution for it and presenting the solution in different medias including a google slides presentation and at the end of the term a poster presentation. I chose this project because it demonstrates my ability to work in a team-based environment and communicate with them effectively, also since presentations are a main method for conveying our ideas and solutions, and lastly since this was a stepping stone in my journey as a communicator. This project has taught me alot about the importance of clear communication within a team. While working on this project I gained many of the necessary skills that I needed to succeed in this course. For example, working on the poster helped me with making the brochures, and also by working on my presentation skills I was able to do better in the interview and also the group presentation we had to do in this course. Presenting in front of my peers and instructors has always been something I struggled with. But while working on this project I learned that the more I practice, and the more I am passionate and confident in the topics I am presenting, the easier it gets to communicate clearly and engage the audience. I am really proud of the outcome of this team project that I worked on and I believe this is one of my best works so far in terms of collaboration and project planning. 

        </p>
      </div>

      <div className="row button-row">
        <button className="rounded-button"onClick={handleDownload}> Download</button>
      </div>
    </div>
  );
}

export default Project4;
