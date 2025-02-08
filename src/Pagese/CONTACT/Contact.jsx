import React, { useState } from 'react';
import cont from '../../assets/Contact.jpg'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
        message: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert(`Name: ${formData.name}`);
    };

    return (
        <div id="contact" className="relative flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6" style={{backgroundImage:`url(${cont})`}} >
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl font-semibold mb-4" id='titletxt'>Track Us</h1>
                <p className="text-gray-700" id='paratxtt'>
                    We’d love to hear from you! Whether you have questions, need assistance, or want to collaborate, feel free to reach out.
                    Our team is here to help and ensure you get the best experience. You can contact us via email, phone, or our online form.
                    We look forward to connecting with you!
                </p>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full md:w-1/2" >
                <form onSubmit={handleSubmit} id='cotactform' className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6" id='contacttitle'>Contact Us</h2>

                    <label className="block mb-2 text-gray-700">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <label className="block mt-4 mb-2 text-gray-700">Mobile</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <label className="block mt-4 mb-2 text-gray-700">Address</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

                    <label className="block mt-4 mb-2 text-gray-700">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>

                    <label className="block mt-4 mb-2 text-gray-700">Upload Resume</label>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <button type="submit" className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
