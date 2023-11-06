import React from 'react';
import { Icon } from '@iconify/react';


const Contact = () => {
    return (
        <section id="contact" className="bg-white py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact</h2>
                <h3 className="text-3xl font-bold mb-10 text-center">Get in touch 👨🏻‍💻</h3>

                <div className="flex justify-center items-center space-x-4">
                    <div className="flex items-center">
                        <Icon icon="ep:map-location" color="black" width="50" height="50" />
                        <h2 className="text-2xl text-gray-600 mt-2 ml-5">Adelaide, Australia</h2>
                    </div>

                    <div className="flex items-center">
                        <Icon icon="ic:baseline-email" color="black" width="50" height="50" />
                        <a
                            href="mailto:charltonortega14@gmail.com"
                            className="text-lg text-gray-600 mt-2 ml-3 hover:underline transition-colors"
                        >
                            charltonortega14@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
