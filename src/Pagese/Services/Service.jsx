import React from "react";
import "../Services/Service.css";
import bg from '../../assets/Ouerservices.jpg'

function Service() {
  return (
    <div id="service" style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center py-16 px-4 w-full">
      <div className="relative flex flex-col items-center justify-center text-center">
        <h1 id='servtxt' className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-8">Our Services</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          {/* Service Card */}
          {[
            { title: "Cloud Services", description: "Cloud services provide scalable computing power, storage, and networking over the internet. Businesses can access cloud-based solutions like SaaS, PaaS, and IaaS to improve efficiency, security, and cost-effectiveness while enabling remote work and seamless collaboration." },
            { title: "IT Consulting", description: "IT consulting helps businesses implement modern technology strategies, optimize processes, and align IT infrastructure with business goals. It includes digital transformation, cloud adoption, cybersecurity planning, and workflow automation for improved efficiency and growth." },
            { title: "IT Support", description: "IT support ensures smooth business operations by providing troubleshooting, system maintenance, and helpdesk services. It includes network management, software updates, security monitoring, and data recovery to prevent downtime and improve productivity." },
            { title: "IoT & Embedded Systems", description: "IoT and embedded systems connect physical devices to the internet, enabling smart automation and data exchange. They are used in industries like healthcare, manufacturing, and smart homes, integrating sensors, AI, and real-time analytics." },
            { title: "Cybersecurity", description: "Cybersecurity protects businesses from cyber threats, data breaches, and unauthorized access. It includes firewalls, encryption, threat detection, and compliance measures to safeguard sensitive information and maintain trust." },
            { title: "Software Development", description: "Software development involves designing, coding, testing, and deploying applications for web, mobile, and enterprise. It ensures user-friendly, scalable, and secure solutions tailored to business needs." }
          ].map((service, index) => (
            <div key={index} id='sercard' className="p-6 rounded-xl shadow-lg text-center bg-white w-full flex flex-col flex-grow transition-transform duration-300 hover:scale-105">
              <h1 className="text-black font-semibold text-lg md:text-xl lg:text-2xl py-3" id='tittxt'>{service.title}</h1>
              <p className="text-gray-700 text-sm md:text-base lg:text-lg py-3" id="paratxt">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
