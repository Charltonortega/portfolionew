import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Node.js',
    'GraphQL',
    'Responsive Design',
];

const Hero = () => {
    return (
        <motion.section
            className="bg-blue-900 text-white py-16 relative overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        I'm Charlton Ortega
                    </motion.h1>
                    <motion.p
                        className="text-xl mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        Web Developer & Enthusiast
                    </motion.p>
                    <motion.p
                        className="text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        I specialize in creating web applications with a passion for front-end development.
                        Let's build amazing things together!
                    </motion.p>
                    <a
                        href="/portfolio"
                        className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-full inline-block mt-4 hover:bg-yellow-500 transition duration-300"
                    >
                        View Portfolio
                    </a>
                </div>
                <div className="md:w-1/2 text-center mb-6 md:mb-0">
                    <motion.div
                        className="w-64 h-64 rounded-full mx-auto border-4 border-yellow-400 overflow-hidden"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <img
                            src="./src/assets/headshot.jpg"
                            alt="Charlton Ortega"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
            <motion.ul
                className="text-lg text-center mt-8 flex flex-wrap justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                {skills.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="w-1/2 sm:w-1/3 lg:w-1/4 p-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
};

export default Hero;
