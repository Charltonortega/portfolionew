import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <motion.section
            className="bg-gray-50 text-black h-screen flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <motion.h1
                        className="text-7xl font-bold mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                    >
                        Full-Stack Web Developer 👋
                    </motion.h1>

                    <motion.div
                        className="text-2xl mb-4 text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.4 }}
                    >
                        Hi there, I'm Charlton Ortega, A passionate front-end Web Developer based in Adelaide, Australia.📍
                    </motion.div>

                </div>
                <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                    <motion.div
                        className="rounded-full border-1 border-black overflow-hidden blob"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
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
            <div className="text-center mt-10
            ">
                <h2 className="text-3xl font-bold mr-6 inline-block ">Tech Stack |</h2>
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
