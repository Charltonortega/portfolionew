import React from 'react';

// Define your projects data
const projectsData = [
    {
        id: 1,
        title: 'RecipeRadar',
        description: 'Recipe Radar is a web application that helps users find recipes based on the ingredients they have. It also provides nutritional information and allows users to save their favorite recipes for easy access in the future.',
        image: './src/assets/reciperadar.png',
        demoLink: 'https://jujusoi.github.io/Project-1/index.html',
        repoLink: 'https://github.com/jujusoi/G3-ReadMi',
    },
    {
        id: 2,
        title: 'ReadMi',
        description: 'ReadMi is a full-stack web application that simplifies book discovery and management. Search for books, create wishlists, engage with the reading community, and more in this user-friendly platform.',
        image: './src/assets/readmi.png',
        demoLink: 'https://dry-savannah-12816-a8270f4eeafb.herokuapp.com/home',
        repoLink: 'https://github.com/jujusoi/G3-ReadMi',
    },
    {
        id: 3,
        title: 'Weather App',
        description: 'The Weather Project is a simple web application that provides weather information for a given location. This project utilizes a combination of technologies to fetch, process, and display weather data to users in a user-friendly manner.',
        image: './src/assets/weatherapp.png',
        demoLink: 'https://charltonortega.github.io/6weatherdashboard/',
        repoLink: 'https://github.com/charltonortega/6weatherdashboard',
    },
];

const Projects = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-8">My Projects</h2>
                {projectsData.map((project, index) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        demoLink={project.demoLink}
                        repoLink={project.repoLink}
                        isEven={index % 2 === 0} // Check if index is even
                    />
                ))}
            </div>
        </section>
    );
};

const Project = ({ title, description, image, demoLink, repoLink, isEven }) => {
    return (
        <div className={`bg-white py-8 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="object-cover rounded-3xl mx-auto"
                />
            </div>
            <div className="md:w-1/2 md:pl-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-lg text-gray-600 leading-7 mb-4">{description}</p>
                <div className="flex space-x-4">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                    >
                        Live Demo
                    </a>
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
