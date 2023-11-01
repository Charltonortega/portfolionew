import React from 'react';

function Portfolio() {
  // Define your portfolio projects data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      imageUrl: '/assets/project1.jpg',
      liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
