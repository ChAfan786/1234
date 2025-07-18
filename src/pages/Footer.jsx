import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaChevronRight, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isPolicyPage = ['/terms', '/privacy-policy', '/cookie-policy'].includes(location.pathname);

  // Don't render footer on policy pages
  if (isPolicyPage) {
    return null;
  }

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-4">Next Code Solution</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">Crafting exceptional digital experiences with precision, innovation, and passion since 2025.</p>
              
              <div className="flex space-x-5">
                {[
                  { icon: <FaFacebook className="text-lg" />, url: "https://www.facebook.com/chafan786" },
                  { icon: <FaTwitter className="text-lg" />, url: "https://twitter.com" },
                  { icon: <FaLinkedin className="text-lg" />, url: "linkedin.com/in/muhammad-afan-" },
                  { icon: <FaGithub className="text-lg" />, url: "https://github.com/ChAfan786" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-900 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 border border-gray-800 hover:border-amber-400"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Portfolio", path: "/projects" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact", path: "/contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-400 hover:text-amber-400 transition-colors group"
                    >
                      <FaChevronRight className="mr-3 text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-all" />
                      <Link to={link.path} className="w-full">{link.name}</Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">69 EB Ugru Arifwala, Punjab, Pakistan</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-amber-400 mr-3 flex-shrink-0" />
                  <a href="mailto:nextcodesoution.pk@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">nextcodesolution.pk@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-amber-400 mr-3 flex-shrink-0" />
                  <a href="tel:+9231433425" className="text-gray-400 hover:text-amber-400 transition-colors">+92-3214334425</a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-5">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-gray-900 text-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 w-full border border-gray-800"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-medium px-5 py-3 rounded-r-lg hover:shadow-lg hover:shadow-amber-500/20 transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white mb-3">Legal</h4>
                <div className="flex flex-wrap gap-3 items-center">
                  <motion.div whileHover={{ y: -2 }}>
                    <Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                      Terms & Conditions
                    </Link>
                  </motion.div>
                  <span className="text-gray-600">•</span>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                      Privacy Policy
                    </Link>
                  </motion.div>
                  <span className="text-gray-600">•</span>
                  <motion.div whileHover={{ y: -2 }}>
                    <Link to="/cookie-policy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                      Cookies Policy
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400 mb-3 md:mb-0">
            © {new Date().getFullYear()} <span className="text-amber-400">Next Code Solution Private Limited</span>. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Crafted with <span className="text-amber-400">♥</span> by <span className="text-amber-400">Muhammad Afan</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;