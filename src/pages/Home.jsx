import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaCode, FaServer, FaMobileAlt, FaDatabase, FaLayerGroup, FaRocket, FaDownload, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import LuxuryNavbar from './LuxuryNavbar';
import ServicesPage from './ServicesPage';
import About from './About';
import Contact from './Contact';
import Projects from './ProjectsPage';

const HomePage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleDownloadCV = () => {
    const cvUrl = '/Muhammad_Afan_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Muhammad_Afan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Luxury Navigation */}
      <LuxuryNavbar />
      
      {/* Animated Background Particles - Reduced for mobile */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
            particles: {
              color: {
                value: "#f59e0b",
              },
              links: {
                color: "#f59e0b",
                distance: 100,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: "bounce",
                speed: 0.3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: window.innerWidth < 768 ? 30 : 60,
              },
              opacity: {
                value: { min: 0.1, max: 0.3 },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column - Responsive Circular Profile Image */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-full md:w-5/12 flex justify-center mb-8 md:mb-0"
          >
            <div className="relative group">
              {/* Main Profile Image Container - Responsive sizing */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-amber-500/30 shadow-lg hover:shadow-amber-500/40 transition-all duration-500">
                <img 
                  src="/image.jpg" 
                  alt="Muhammad Afan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Glow Effect - Reduced on mobile */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-20 blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Location Badge - Responsive */}
              <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center">
                <div className="inline-block bg-black/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-amber-500/30 shadow-lg text-sm sm:text-base">
                  <div className="font-medium text-white">Based in Pakistan</div>
                  <div className="text-xs sm:text-sm text-amber-300">Available worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="w-full md:w-7/12"
          >
            <div className="mb-2 text-amber-500 font-mono text-base sm:text-lg">Hello, I'm</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">Muhammad </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Afan</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 font-medium">
              <span className="font-light">Full Stack Developer & Founder of</span> <br className="hidden sm:block"/>
              <span className="text-white font-semibold tracking-wide">Next Code Solution</span>
            </h2>
            
            <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed max-w-2xl pl-3 sm:pl-4 border-l-2 sm:border-l-4 border-amber-500">
              I architect <span className="text-amber-400 font-medium">digital experiences</span> that transform businesses. With comprehensive full-stack expertise, 
              I lead a team of elite developers crafting <span className="text-amber-400 font-medium">innovative, scalable solutions</span> for global enterprises.
            </p>
            
            {/* Skills Grid - Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                { icon: <FaCode className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "Frontend" },
                { icon: <FaServer className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "Backend" },
                { icon: <FaMobileAlt className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "Mobile" },
                { icon: <FaDatabase className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "Database" },
                { icon: <FaLayerGroup className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "DevOps" },
                { icon: <FaRocket className="text-amber-500 mr-2 sm:mr-3 text-lg sm:text-xl" />, name: "AI/ML" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="flex items-center bg-gray-900/50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-gray-800 hover:border-amber-500/50 transition-all text-sm sm:text-base"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Action Buttons - Stacked on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all w-full sm:w-auto"
              >
                <FaDownload className="text-base sm:text-lg" />
                <span>Download CV</span>
              </motion.button>
              
              <div className="flex gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                {[
                  { icon: <FaGithub className="text-base sm:text-lg" />, url: "https://github.com/ChAfan786" },
                  { icon: <FaLinkedin className="text-base sm:text-lg" />, url: "linkedin.com/in/muhammad-afan-" },
                  { icon: <FaFacebook className="text-base sm:text-lg" />, url: "https://www.facebook.com/chafan786" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:text-white hover:bg-amber-500 transition-all duration-300 shadow-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Admin Login Button - Smaller on mobile */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50"
      >
        <motion.a
          href="/login"
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg sm:shadow-xl flex items-center justify-center text-white hover:shadow-amber-500/40 transition-all"
          title="Admin Login"
        >
          <FaCog className="text-lg sm:text-xl" />
        </motion.a>
      </motion.div>

      {/* Section components */}
      <About/>
      <ServicesPage/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default HomePage;