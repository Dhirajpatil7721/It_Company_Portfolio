import React from 'react';
import port from '../../assets/Port.jpg'
import './Portfoilo.css'

function Portfolio() {
    return (
        <>
        <div id="portfolio" className="bg-cover bg-center" style={{backgroundImage: `url(${port})`}}>
            <h1 className="text-3xl font-bold text-center text-white mb-6">Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center  pb-6">
                {/* Project 1 */}
                <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm" id='card'>
                    <h2 className="text-xl font-semibold text-black mb-2" id="potitle">AI-Powered Resume Builder</h2>
                    <p id="ptxt">Developed an AI-powered resume builder using React, Spring Boot, and MySQL, which provides real-time suggestions based on job descriptions, ATS-friendly formatting, and one-click export options.</p>
                </div>

                {/* Project 2 */}
                <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm" id='card'>
                    <h2 className="text-xl font-semibold text-black mb-2" id="potitle">E-Commerce Web Application</h2>
                    <p id="ptxt">Built a low-cost, easy-to-use e-commerce platform using React, Node.js, and MongoDB. The platform includes secure payment integration and user-friendly dashboards.</p>
                </div>

                {/* Project 3 */}
                <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm" id='card'>
                    <h2 className="text-xl font-semibold text-black mb-2" id="potitle">Healthcare Appointment Booking</h2>
                    <p id="ptxt">Developed a cross-platform mobile app (React Native, Firebase) that enables users to schedule doctor appointments with real-time availability.</p>
                </div>

                {/* Project 4 */}
                <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm" id='card'>
                    <h2 className="text-xl font-semibold text-black mb-2" id="potitle">Cybersecurity Threat Detection</h2>
                    <p id="ptxt">Developed an AI-driven threat detection system using Python, Machine Learning, and AWS to monitor network traffic and detect anomalies in real-time.</p>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-sm" id='card'>
                    <h2 className="text-xl font-semibold text-black mb-2" id="potitle">ERP (Enterprise Resource Planning)</h2>
                    <p id="ptxt">ERP (Enterprise Resource Planning) integrates business processes like finance, HR, supply chain, and manufacturing into a unified software system.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Portfolio;
