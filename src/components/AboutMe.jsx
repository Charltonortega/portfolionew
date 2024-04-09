import React from 'react';

const AboutMe = () => {
    return (
        <section id="aboutme" className="bg-white text-black py-16 style">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="/developersplash.png"
                        alt="Placeholder Photo"
                        className="w-130 h-64 rounded-3xl mx-auto"
                    />

                </div>


                <div className="md:w-1/2">
                    <h1 className="text-2xl text-blue-600 font-bold mb-2">ABOUT ME</h1>
                    <h2 className="text-4xl font-bold mb-4">A dedicated web-developer based in Adelaide, Australia📍</h2>
                    <p className="text-lg text-gray-600 leading-7">
                        As a Junior Front-End Developer, I bring a diverse skill set that includes proficiency in HTML, CSS, JavaScript, React, Tailwind, and SCSS. My focus is on creating responsive websites that provide users with an exceptional experience. I specialize in developing dynamic and engaging interfaces by consistently producing clean and efficient code. I stay up-to-date with the latest industry tools and techniques to ensure that I deliver high-quality web applications. Additionally, I thrive in team environments and excel in cross-functional collaboration, contributing to the creation of outstanding web solutions.

                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
