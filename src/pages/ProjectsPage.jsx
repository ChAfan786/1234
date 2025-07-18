import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isHovered, setIsHovered] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load projects from localStorage
  useEffect(() => {
    const loadProjects = () => {
      try {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
        
        // Initialize image indexes
        const initialIndexes = {};
        storedProjects.forEach((_, index) => {
          initialIndexes[index] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();

    // Listen for storage changes to sync across tabs
    const handleStorageChange = (e) => {
      if (e.key === 'projects') {
        loadProjects();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Auto-rotate images effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newState = {};
        projects.forEach((project, index) => {
          // Only auto-rotate if not hovered and has multiple images
          if (isHovered !== index && project.images.length > 1) {
            newState[index] = ((prev[index] || 0) + 1) % project.images.length;
          } else {
            newState[index] = prev[index] || 0;
          }
        });
        return newState;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [projects, isHovered]);

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }));
  };

  const goToImage = (projectIndex, imgIndex) => {
    setCurrentImageIndex(prev => ({ ...prev, [projectIndex]: imgIndex }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-center p-6 bg-gray-900/70 rounded-xl max-w-md">
          <h2 className="text-xl font-bold text-amber-500 mb-2">Error Loading Projects</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              My Projects
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/30 via-amber-300/50 to-amber-500/30 rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects. Click on the demo or code buttons to explore them further.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-amber-400 mb-4">No Projects Yet</h2>
              <p className="text-gray-400 mb-6">
                It looks like there are no projects to display. Check back later or contact me to learn more about my work.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group relative"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10 bg-amber-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <FiStar className="mr-1" /> Featured
                  </div>
                )}

                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-amber-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative h-full bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex[index] || 0}
                        src={project.images[currentImageIndex[index] || 0]}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

                    {project.images.length > 1 && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage(index);
                            }}
                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                            aria-label="Previous image"
                          >
                            <FiChevronLeft className="text-xl" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage(index);
                            }}
                            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                            aria-label="Next image"
                          >
                            <FiChevronRight className="text-xl" />
                          </button>
                        </div>

                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              className={`h-1.5 rounded-full transition-all duration-300 ${(currentImageIndex[index] || 0) === imgIndex ? 'bg-amber-400 w-6' : 'bg-gray-600/70 w-3 hover:bg-gray-500'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                goToImage(index, imgIndex);
                              }}
                              aria-label={`Go to image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-white">
                        {project.title}
                      </h2>
                      {project.category && (
                        <span className="text-xs bg-gray-800/80 text-amber-300 px-2 py-1 rounded-full border border-gray-700/50">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex space-x-3 mb-4">
                      {project.liveDemoLink && (
                        <a 
                          href={project.liveDemoLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex-1 text-center"
                        >
                          <FiExternalLink className="mr-2" /> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center bg-gray-800/70 hover:bg-gray-700/80 border border-gray-700/50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg flex-1 text-center"
                        >
                          <FiGithub className="mr-2" /> View Code
                        </a>
                      )}
                    </div>

                    {(project.techStack || project.tags) && (
                      <div className="flex flex-wrap gap-2">
                        {(project.techStack || project.tags || []).map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-800/80 text-xs text-amber-300 px-3 py-1 rounded-full border border-gray-700/50 hover:bg-gray-800 hover:text-amber-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;