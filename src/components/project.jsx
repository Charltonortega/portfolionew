import React from 'react';

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
    }

];
const Projects = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-100 p-4 rounded-lg transition-transform hover:transform hover:scale-105"
                        >
                            <div className="mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="mt-auto">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                                >
                                    Demo
                                </a>
                                <span className="text-gray-500 mx-2">|</span>
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline hover:text-blue-600 transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;