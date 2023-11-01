import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-center items-center">
                <a
                    href="https://www.linkedin.com/in/charlton-ortega-326683170/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mr-4"
                >
                    <Icon icon="mdi:linkedin" width="50" height="50" />
                </a>

                <a
                    href="https://github.com/Charltonortega"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mr-4"
                >
                    <Icon icon="mdi:github" width="50" height="50" />
                </a>

                <a
                    href="mailto:charltonortega14@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                >
                    <Icon icon="mdi:email" width="50" height="50" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
