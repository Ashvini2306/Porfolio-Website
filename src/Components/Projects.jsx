import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);


    const projects = [
        {
            title: "Portfolio Website",
            description: "A responsive personal portfolio built with React.js, showcasing my skills and projects with modern animations.",
            tech: ["React", "CSS3"],
            details: 'A sleek, fully responsive personal portfolio website built with React.js. It highlights my professional background, skills, and a curated collection of projects in an elegant layout. The site features smooth animations, interactive elements, and a clean design that reflects a modern web development aesthetic.'

        },
        {
            title: "E-commerce App",
            description: "Full-stack e-commerce platform with product listings, cart functionality, and user authentication.",
            tech: ["React", "Springboot", "Mysql"],
            details: 'A robust full-stack e-commerce platform that allows users to browse products, manage a shopping cart, and securely register or log in. The application supports CRUD operations for product listings, seamless cart functionality, and secure user authentication using JWT. Built with scalability and modularity in mind, it provides a smooth and intuitive shopping experience.'

        },
        {
            title: "Employee Management System",
            description: "Developed an Employee Management System with full CRUD operations to efficiently manage employee records including creation, retrieval, updating, and deletion.",
            tech: ["React", "Springboot", "MySql"],
            details: 'A comprehensive Employee Management System built using React.js and Spring Boot, designed to manage employee data efficiently. The system provides full CRUD (Create, Read, Update, Delete) functionality, allowing HR or admin users to manage employee records such as name, designation, email, and department. With a clean user interface and robust backend, it ensures a seamless user experience for managing workforce data.'

        },

        {
            title: "Smart Water Fountain",
            description: " Smart Water Fountain equipped with advanced IoT technology, to automate water dispensing for improved accessibility, hygiene, and water conservation, making public hydration systems more intelligent and user-friendly.",
            tech: ["C/C++ (Arduino)"],
            details: 'The Smart Water Fountain is an innovative IoT-based project developed using Arduino (C/C++), designed to automate water dispensing in public areas to enhance hygiene, accessibility, and water conservation. It uses sensor-based automation to detect the presence of a user and dispense water accordingly, eliminating the need for physical contact. This system is ideal for use in public places like schools, parks, malls, and offices, promoting sanitary practices and efficient water usage.'

        }
    ];

    const handleCloseModal = () => setSelectedProject(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                cardsRef.current.forEach((el, index) => {
                    setTimeout(() => {
                        el?.classList.add('fade-up');
                    }, index * 150); // stagger animation
                });
            } else {
                cardsRef.current.forEach(el => {
                    el?.classList.remove('fade-up');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // trigger on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id='projects' className="projects-section" ref={sectionRef}>
            <h2 className="projects-title">🚀 Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-tags">
                            {project.tech.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                        <button className="view-link" onClick={() => setSelectedProject(project)}>
                            View More →
                        </button>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.details}</p>
                        <button className="close-button" onClick={handleCloseModal}>✖ Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
