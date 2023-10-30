// Resume.js
import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume: <a href="/path-to-resume.pdf" download>Resume.pdf</a></p>
      <h3>Skills and Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        {/* Add your skills here */}
      </ul>
    </section>
  );
}

export default Resume;
