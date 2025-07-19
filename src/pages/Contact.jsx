import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactCards = [
    {
      icon: <FaPhone className="text-amber-400 text-xl sm:text-2xl" />,
      title: "Phone",
      content: "+92 321 4334425",
      action: "tel:+923214334425",
      delay: 0.1
    },
    {
      icon: <FaEnvelope className="text-amber-400 text-xl sm:text-2xl" />,
      title: "Email",
      content: "nextcodesolution.pk@gmail.com",
      action: "mailto:nextcodesolution.pk@gmail.com",
      delay: 0.2
    },
    {
      icon: <FaMapMarkerAlt className="text-amber-400 text-xl sm:text-2xl" />,
      title: "Office Address",
      content: "69 EB Ugru, Near Jamia Masjid, Arifwala, Punjab, Pakistan",
      action: "https://maps.google.com",
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 sm:py-16 md:p-8 relative overflow-hidden">
      {/* Background elements - Reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-amber-900/10 blur-[50px] sm:blur-[100px] animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-amber-800/5 blur-[60px] sm:blur-[120px] animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-amber-700/5 blur-[40px] sm:blur-[80px] animate-float"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block relative">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 relative z-10"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
                Get In Touch
              </span>
            </motion.h1>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-1 -right-2 sm:-bottom-2 sm:-right-4 w-16 sm:w-32 h-4 sm:h-8 bg-amber-500/30 blur-xl rounded-full"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
          >
            We'd love to hear from you. Reach out through any of these channels or send us a message directly.
          </motion.p>
        </motion.div>

        {/* Contact Cards - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.action}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden border border-gray-800 hover:border-amber-500/30 transition-all duration-300 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-6 sm:p-8 text-center relative z-10">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-900/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-amber-900/30 transition-all duration-300 shadow-lg"
                >
                  {card.icon}
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">{card.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{card.content}</p>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center justify-center px-4 py-1 sm:px-6 sm:py-2 rounded-full bg-amber-900/20 border border-amber-800/50 group-hover:bg-amber-900/30 transition-colors duration-300"
                >
                  <span className="text-xs sm:text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                    {card.title === "Phone" ? "Call Now" : card.title === "Email" ? "Send Email" : "View on Map"}
                  </span>
                </motion.div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20 bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden border border-gray-800 p-6 sm:p-8 md:p-12"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-900/20 mb-4 sm:mb-6">
                <FaPaperPlane className="text-amber-400 text-xl sm:text-2xl" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Send Us a Message</h2>
              <p className="text-gray-300 text-sm sm:text-base">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-500 transition-all text-sm sm:text-base"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 sm:py-4 sm:px-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-white text-sm sm:text-base" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;