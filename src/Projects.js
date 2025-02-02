import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();

    const projectList = [
        {
            title: 'Personalized News App',
            description: 'A full-stack app for personalized news recommendations.',
            tech: 'React, Node.js, Firebase',
            languages: 'JavaScript, HTML, CSS',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'AI Stock Prediction Model',
            description: 'A machine learning model to predict stock trends.',
            tech: 'Python, Scikit-learn, Pandas',
            languages: 'Python',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Health Tracker App',
            description: 'A web app for tracking diet and exercise.',
            tech: 'HTML, CSS, JavaScript',
            languages: 'JavaScript, HTML, CSS',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Traditional & Roth IRA Investment Calculator',
            description: 'Java Program that can calulate returns on various factors.',
            tech: 'JavaFX, Java AWT',
            languages: 'Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'IOS VPN App',
            description: 'VPN app to change user ip address location using AWS.',
            tech: 'OpenVPN, AWS',
            languages: 'Swift',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Email Authorization Chrome Extension',
            description: 'Chrome Extention that retrieves security code and autofills for user.',
            tech: 'Gmail API',
            languages: 'JavaScript, HTML, CSS',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Tab Saver Chrome Extension',
            description: 'Chrome Extention that saves closed tabs and history allowing user to free up tabs at top of the screen.',
            tech: '',
            languages: 'JavaScript, HTML, CSS',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Pong Game',
            description: 'Android App that is similar to the game of pong.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Recipe Creator and Grocery Store Locator',
            description: 'Android App that allows user to create recipes, rate recipes, and find groceries that have those ingredients.',
            tech: 'Google Maps Api, Google Ads, Firebase',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Mortgage Calculator',
            description: 'Android App that allows user to calculate mortgage on various inputs.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Tennis Game',
            description: 'Android App that allows user to track a game of tennis.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Simon Game',
            description: 'Android App that is similar to the game of simon.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Balloon Game',
            description: 'Android App that is similar to the balloon popping game.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
        {
            title: 'Currency Converter',
            description: 'Android App that allows user to convert currencies and see good morning and thank you translations.',
            tech: '',
            languages: 'Kotlin, Java',
            github: 'https://github.com/jayurl',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <div className="flex justify-end">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"

                >
                    ← Back
                </button>
            </div>
            <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                        <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <p className="text-gray-700 mt-4">
                            <strong>Technologies:</strong> {project.tech}
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Languages:</strong> {project.languages}
                        </p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-4 block"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
