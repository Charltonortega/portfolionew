// Portfolio.js
import React from 'react';
import Project from './Project';

const projects = [
  // Define your project data here
];

function Portfolio() {
  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;