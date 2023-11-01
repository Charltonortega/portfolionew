import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-center items-center">
                <a
                    href="https://www.linkedin.com/in/your-linkedin-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mr-4"
                >
                    <img
                        src="https://example.com/linkedin-logo.png" // Replace with the official LinkedIn logo URL
                        alt="LinkedIn Logo"
                        className="h-6 w-6"
                    />
                </a>

                <a
                    href="https://github.com/your-github-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mr-4"
                >
                    <img
                        src="https://example.com/github-logo.png" // Replace with the official GitHub logo URL
                        alt="GitHub Logo"
                        className="h-6 w-6"
                    />
                </a>

                <a
                    href="mailto:your.email@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                >
                    <img
                        src="https://example.com/email-logo.png" // Replace with the official email logo URL
                        alt="Email Logo"
                        className="h-6 w-6"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
