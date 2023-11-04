import React from 'react';

const Project = ({ title, description, image, demoLink, repoLink }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg transition-transform hover:transform hover:scale-105 flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className="md:w-2/3 md:ml-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex items-center">
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-blue-600 transition-colors mr-4"
                    >
                        Live Demo
                    </a>
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    // Hardcoded project data
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

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            demoLink={project.demoLink}
                            repoLink={project.repoLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
