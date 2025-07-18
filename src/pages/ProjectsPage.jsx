import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Using placeholder images from real projects (replace these with your actual images)
const project1Image1 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project1Image2 = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";
const project2Image1 = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80";
const project2Image2 = "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project3Image1 = "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const project3Image2 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A complete online shopping solution with product catalog, user authentication, cart system, and payment processing.",
      images: [project1Image1, project1Image2],
      liveDemoLink: "#",
      githubLink: "#",
      techStack: ["React", "Node.js", "MongoDB", "Redux"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with task boards, drag-and-drop interface, and team collaboration features.",
      images: [project2Image1, project2Image2],
      liveDemoLink: "#",
      githubLink: "#",
      techStack: ["React", "Firebase", "Material UI"],
      category: "Web App"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern responsive portfolio website with smooth animations and project showcase section.",
      images: [project3Image1, project3Image2],
      liveDemoLink: "#",
      githubLink: "#",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Website"
    }
  ]);
  
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isHovered, setIsHovered] = useState(null);

  // Initialize image indexes
  useEffect(() => {
    const initialIndexes = {};
    projects.forEach((_, index) => {
      initialIndexes[index] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, [projects]);

  // Auto-rotate images effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newState = {};
        projects.forEach((project, index) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-800/80 text-xs text-amber-300 px-3 py-1 rounded-full border border-gray-700/50 hover:bg-gray-800 hover:text-amber-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;