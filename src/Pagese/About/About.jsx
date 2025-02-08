import React, { useEffect, useState } from "react";
import about from "../../assets/About.jpg";
import './About.css'

function About() {
    const [ex, setEx] = useState(0);
    const [cli, setCli] = useState(0);
    const [cus, setCus] = useState(0);
    const [aw, setAw] = useState(0);

    useEffect(() => {
        const exInterval = setInterval(() => {
            setEx((prev) => (prev < 15 ? prev + 1 : prev));
        }, 80);
        return () => clearInterval(exInterval);
    }, []);

    useEffect(() => {
        const cliInterval = setInterval(() => {
            setCli((prev) => (prev < 1150 ? prev + 10 : prev)); // Faster increment
        }, 10);
        return () => clearInterval(cliInterval);
    }, []);

    useEffect(() => {
        const cusInterval = setInterval(() => {
            setCus((prev) => (prev < 500 ? prev + 5 : prev));
        }, 15);
        return () => clearInterval(cusInterval);
    }, []);

    useEffect(() => {
        const awInterval = setInterval(() => {
            setAw((prev) => (prev < 38 ? prev + 1 : prev));
        }, 50);
        return () => clearInterval(awInterval);
    }, []);

    return (
        <div
            id="about"
            className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-4 md:p-8 lg:p-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${about})` }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

            <div className="relative z-10 max-w-4xl mb-10">
                <h2 className="text-2xl md:text-4xl font-bold" id='abouttitle'>Who We Are</h2>
                <p id='p' className="mt-4 text-sm md:text-lg leading-relaxed">
                    At Company, we are a leading IT solutions provider, delivering
                    cutting-edge technology services to businesses worldwide. Our mission
                    is to empower businesses with <strong id="strong">scalable and efficient digital solutions</strong> that drive growth and success. <strong id="strong">Your vision, our technology—together, we innovate! 🚀</strong>
                </p>
            </div>

            {/* Stats Section */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl px-4">
                <div id='cardd' className="bg-blue-600 p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Years of Experience</h3>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-2">{ex}+</h1>
                </div>

                <div id='cardd' className="bg-green-600 p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Clients Served</h3>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-2">{cli}+</h1>
                </div>

                <div id='cardd' className="bg-red-600 p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Satisfied Customers</h3>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-2">{cus}+</h1>
                </div>

                <div id='cardd' className="bg-purple-600 p-6 rounded-xl shadow-lg text-center">
                    <h3 className="text-lg font-semibold">Awards Received</h3>
                    <h1 className="text-3xl sm:text-5xl font-bold mt-2">{aw}+</h1>
                </div>
            </div>

            {/* Ensure there's no overlap with the next section */}
            <div className="h-24"></div> {/* This is to create space for the next section */}
        </div>
    );
}

export default About;
