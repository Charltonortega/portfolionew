import React from 'react';
import { Icon } from '@iconify/react';

// Define your projects data
const projectsData = [
    {
        id: 1,
        title: 'RecipeRadar 🍳',
        description: 'Recipe Radar is a web application that helps users find recipes based on the ingredients they have. It also provides nutritional information and allows users to save their favorite recipes for easy access in the future.',
        image: './src/assets/reciperadar.png',
        demoLink: 'https://jujusoi.github.io/Project-1/index.html',
        repoLink: 'https://github.com/jujusoi/G3-ReadMi',
        languages: ['HTML', 'CSS', 'JavaScript', 'React', 'Bulma', 'SCSS']
    },
    {
        id: 2,
        title: 'ReadMi  📚',
        description: 'ReadMi is a full-stack web application that simplifies book discovery and management. Search for books, create wishlists, engage with the reading community, and more in this user-friendly platform.',
        image: './src/assets/readmi.png',
        demoLink: 'https://dry-savannah-12816-a8270f4eeafb.herokuapp.com/home',
        repoLink: 'https://github.com/jujusoi/G3-ReadMi',
        languages: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB']
    },
    {
        id: 3,
        title: 'Weather App  🌦️',
        description: 'The Weather Project is a simple web application that provides weather information for a given location. This project utilizes a combination of technologies to fetch, process, and display weather data to users in a user-friendly manner.',
        image: './src/assets/weatherapp.png',
        demoLink: 'https://charltonortega.github.io/6weatherdashboard/',
        repoLink: 'https://github.com/charltonortega/6weatherdashboard',
        languages: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'OpenWeather API']
    },
    {
        id: 4,
        title: 'Employee Tracker',
        description: '👔Employee Tracker: Manage employee info, departments, and roles in a MySQL database via a command-line app.',
        image: './src/assets/employeetracker.png',
        repoLink: 'https://github.com/charltonortega/Employee-Tracker',
        languages: ['JavaScript', 'Node.js', 'MySQL', 'Inquirer', 'Jest']
    },
    {
        id: 5,
        title: 'Code Quiz',
        description: '🧠Code Quiz: Create a code quiz with multiple-choice questions to test your knowledge of JavaScript fundamentals.',
        image: './src/assets/codequiz1.gif',
        demoLink: 'https://charltonortega.github.io/Web-APIs-Challenge-Code-Quiz',
        repoLink: 'https://github.com/Charltonortega/Web-APIs-Challenge-Code-Quiz',
        languages: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 6,
        title: 'E-Commerce Back-End',
        description: '🛒E-Commerce Back-End: Create an e-commerce backend with Node.js, Express, Sequelize, and MySQL.',
        image: './src/assets/ecommercebackend.gif',
        repoLink: 'https://github.com/Charltonortega/E-commerce-Back-End',
        languages: ['Node.js', 'Express', 'Sequelize', 'MySQL']
    }
];


const Projects = () => {
    return (
        <section id="projects" className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-1 text-blue-600">PORTFOLIO</h2>
                <h3 className='text-3xl font-bold mb-14'>Here are some of my projects 👨🏻‍💻</h3>
                {projectsData.map((project, index) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        demoLink={project.demoLink}
                        repoLink={project.repoLink}
                        isEven={index % 2 === 0}
                        languages={project.languages}
                    />
                ))}
            </div>
        </section>
    );
};

const Project = ({ title, description, image, demoLink, repoLink, isEven, languages }) => {
    return (
        <div className={`bg-gray py-8 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2">
                <img
                    src={image}
                    alt={title}
                    className="object-cover rounded-3xl mx-auto"
                />
            </div>
            <div className="md:w-1/2 md:pl-5">
                <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
                <p className="text-lg text-gray-600 leading-7 mb-4">{description}</p>

                <div className="flex space-x-4 mb-4 justify-center">
                    {languages.map((language, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-700 py-1 px-2 rounded-md text-sm"
                        >
                            {language}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4 justify-center">

                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600 mr-4"
                    >
                        <Icon icon="gridicons:external" width="50" height="50" color="black" className='inline-block' />
                        Live Demo
                    </a>

                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600 mr-4"
                    >
                        <Icon icon="mdi:github" width="50" height="50" color="black" className='inline-block' />
                        Github Repo
                    </a>




                </div>
            </div>
        </div>
    );
};



export default Projects;
