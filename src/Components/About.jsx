import React from 'react';
import './About.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const About = () => {
    return (
        <section id='about'>
            <div className="about-section">
                {/* Left Side - Stylish Info Cards */}
                <div className="about-left w-full md:w-1/2 px-4">
                    <h2 className="text-2xl font-bold mb-2 text-orange-500">About Me</h2>
                    <h3 className="text-lg text-gray-700 mb-4">Java Full Stack Developer</h3>

                    <div className="info-card custom-card bg-white p-4 md:p-6 rounded-xl shadow-lg space-y-6">


                        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-800">

                            {/* Education Card */}
                            <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-orange-500">
                                <h4 className="text-xl font-bold text-orange-600 mb-4">Education</h4>

                                <div className="mb-4">
                                    <p className="font-semibold text-lg">B.Tech – Information Technology</p>
                                    <p>Dr. Sivanthi Aditanar College of Engineering, Tiruchendur</p>
                                    <p className="text-sm text-gray-600">2021 – 2025 | CGPA: <span className="font-semibold">8.72</span></p>
                                </div>

                                <div className="mb-4">
                                    <p className="font-semibold text-lg">HSC</p>
                                    <p>S.Shunmuga Sundara Nadar Higher Secondary School, Authoor</p>
                                    <p className="text-sm text-gray-600">2020 – 2021 | Percentage: <span className="font-semibold">91%</span></p>
                                </div>

                                <div>
                                    <p className="font-semibold text-lg">SSLC</p>
                                    <p>S.Shunmuga Sundara Nadar Higher Secondary School, Authoor</p>
                                    <p className="text-sm text-gray-600">2018 – 2019 | Percentage: <span className="font-semibold">92%</span></p>
                                </div>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500">
                                <h4 className="text-xl font-bold text-blue-600 mb-4">Experience</h4>

                                <div>
                                    <p className="font-semibold text-lg">Java Full Stack Developer Intern</p>
                                    <p className="text-sm text-gray-600">2025 – Present</p>
                                    <p className="mt-2">
                                        Hands-on experience in building responsive user interfaces using <span className="font-medium">React.js</span>, <span className="font-medium">CSS</span>, and <span className="font-medium">JavaScript</span>. Built landing pages, reusable components, resume/contact forms, and project galleries.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Personal Details */}
                        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500 text-sm text-gray-800">
                            <h4 className="text-xl font-bold text-green-600 mb-4">Personal Details</h4>

                            <div className="mb-3">
                                <p><span className="font-semibold text-gray-900">Name:</span> Ashvini A</p>
                            </div>

                            <div className="mb-3">
                                <p><span className="font-semibold text-gray-900">Age:</span> 20</p>
                            </div>

                            <div>
                                <p><span className="font-semibold text-gray-900">Address:</span></p>
                                <p>
                                    1/46, Arunachala Swamy Kovil Street, Umarikadu<br />
                                    Thoothukudi District – 628151
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Right Side - Rotating Circles with Resume Button Below */}
                <div className="about-right">
                    <div className="right-inner">
                        <div className="circle-container">
                            <div className="outer-circle">
                                <div className="inner-circle"></div>
                                <div className="icon icon1"><FaCode /></div>
                                <div className="icon icon2"><FaPaintBrush /></div>
                                <div className="icon icon3"><FaMobileAlt /></div>
                                <div className="icon icon4"><FaLaptopCode /></div>
                            </div>
                        </div>

                        {/* Updated Resume View Button Below Circle */}
                        <a
                            href="/Ashvini-Resume.pdf"
                            download="Ashvini-Resume.pdf"
                            className="resume-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Resume
                        </a>

                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;