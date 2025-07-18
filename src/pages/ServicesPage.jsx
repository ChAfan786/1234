import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaCloud, FaChartLine, FaShieldAlt, FaRobot, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4 text-amber-400" />,
      title: "Web Development",
      description: "Custom, responsive websites with modern frameworks like React, Next.js, and Vue.js. We create blazing fast, SEO-optimized web applications.",
      highlights: [
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
        "API Integrations"
      ]
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-amber-400" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with flawless performance and intuitive UX.",
      highlights: [
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization",
        "Enterprise Mobility"
      ]
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-amber-400" />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Python, Java, and .NET. Secure, scalable architecture for your business needs.",
      highlights: [
        "Microservices Architecture",
        "RESTful APIs",
        "GraphQL Services",
        "Database Design"
      ]
    },
    {
      icon: <FaCloud className="text-4xl mb-4 text-amber-400" />,
      title: "Cloud Solutions",
      description: "End-to-end cloud services including migration, management, and optimization on AWS, Azure, and Google Cloud.",
      highlights: [
        "Cloud Architecture",
        "DevOps Automation",
        "Serverless Computing",
        "Containerization"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl mb-4 text-amber-400" />,
      title: "Digital Transformation",
      description: "Comprehensive strategy to modernize your business with cutting-edge digital technologies and processes.",
      highlights: [
        "Process Automation",
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Workflow Optimization"
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-amber-400" />,
      title: "Cyber Security",
      description: "Enterprise-grade security solutions to protect your digital assets and ensure compliance with regulations.",
      highlights: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Data Protection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Our <span className="text-amber-400">Premium</span> Services
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Next Code Solution Private Limited delivers cutting-edge technology solutions to transform your business and accelerate growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-amber-400 transition-all duration-300 group"
          >
            <div className="flex flex-col h-full">
              {service.icon}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2">
                {service.highlights.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;