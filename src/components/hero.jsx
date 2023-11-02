import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <motion.section
            className="bg-white text-black py-24 relative overflow-hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center px-1">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 font-source-sans-pro-black header-2">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Full-Stack Web Developer 👋
                    </motion.h1>

                    <motion.p
                        className="text-large content-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        Hi there, I'm Charlton Ortega, A passionate front-end Web Developer based in Adelaide, Australia.📍
                    </motion.p>
                </div>
                <div className="md:w-1/2 text-center mb-6 md:mb-0">
                    <motion.div
                        className="w-72 h-72 rounded-full mx-auto border-1 border-black overflow-hidden blob"
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

            {/* Tech Stack Section */}
            <div className="text-center mt-8">
                <h2 className="text-2xl font-bold mb-2 inline-block">Tech Stack |</h2>
                <div className="inline-block space-x-10">
                    <Icon icon="logos:html-5" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:css-3" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:javascript" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:react" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:nodejs" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:express" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:mongodb" width="50" height="50" className="inline-block" />
                    <Icon icon="logos:nosql" width="50" height="50" className="inline-block" />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
