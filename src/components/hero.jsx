import React from 'react';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <section className="bg-white text-black py-24 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-1">
                <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 font-source-sans-pro-black header-2">
                    <h1 className="text-4xl font-bold mb-4">Full-Stack Web Developer 👋</h1>
                    <p className="text-large content-1">
                        Hi there, I'm Charlton Ortega, a passionate front-end Web Developer based in Adelaide, Australia.📍
                    </p>
                </div>
                <div className="md:w-1/2 text-center mb-6 md:mb-0 relative">
                    <div
                        className="w-72 h-72 mx-auto blob"
                        style={{
                            backgroundImage: 'url("./src/assets/headshot.jpg")',
                            backgroundSize: 'cover',
                            border: '2px solid black',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
