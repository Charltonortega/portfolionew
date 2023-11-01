import React from 'react';

const Hero = () => {
    return (
        <section className="bg-blue-900 text-white py-16 flex items-center">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">I'm Charlton Ortega</h1>
                    <p className="text-xl mb-8">Web Developer & Enthusiast</p>
                    <p className="text-lg">
                        I specialize in creating web applications with a passion for front-end development.
                        Let's build amazing things together!
                    </p>
                </div>
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                    <img
                        src="./src/assets/headshot.jpg"
                        alt="Charlton Ortega"
                        className="w-64 h-64 rounded-full mx-auto"
                    />
                </div>
                <div className="md:w-1/3 text-center md:text-left">
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus non
                        nisl tempor, id rhoncus elit vehicula. Nullam volutpat vel est eu varius.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
