import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([null, null, null]);
  const [imagePreviews, setImagePreviews] = useState(['', '', '']);
  const [githubLink, setGithubLink] = useState('');
  const [liveDemoLink, setLiveDemoLink] = useState('');
  const [techStack, setTechStack] = useState('');
  const [category, setCategory] = useState('web');
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const loadProjects = () => {
      try {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(storedProjects);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProjects();
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects, isLoading]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = file;
      setImages(updatedImages);

      const reader = new FileReader();
      reader.onload = () => {
        const updatedPreviews = [...imagePreviews];
        updatedPreviews[index] = reader.result;
        setImagePreviews(updatedPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImages([null, null, null]);
    setImagePreviews(['', '', '']);
    setGithubLink('');
    setLiveDemoLink('');
    setTechStack('');
    setCategory('web');
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      alert('Title and description are required!');
      return;
    }

    // If creating new project, require all images
    if (!editId && images.some(img => img === null)) {
      alert('All 3 images are required for new projects!');
      return;
    }

    const processImages = editId && images.every(img => img === null)
      ? Promise.resolve(imagePreviews) // Keep existing images if editing and no new images provided
      : Promise.all(images.map(file => {
          return file 
            ? new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(file);
              })
            : ''; // Keep empty if no file provided during edit
        }));

    processImages.then(processedImages => {
      const projectData = {
        id: editId || Date.now(),
        title,
        description,
        images: processedImages,
        githubLink,
        liveDemoLink,
        techStack: techStack.split(',').map(t => t.trim()).filter(t => t),
        category,
        date: new Date().toISOString()
      };

      const updatedProjects = editId
        ? projects.map(project => project.id === editId ? projectData : project)
        : [...projects, projectData];

      setProjects(updatedProjects);
      resetForm();
    }).catch(() => alert('Failed to process images.'));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('This will delete ALL projects. Are you sure?')) {
      setProjects([]);
      localStorage.removeItem('projects');
    }
  };

  const handleEdit = (project) => {
    setEditId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setGithubLink(project.githubLink);
    setLiveDemoLink(project.liveDemoLink);
    setTechStack(project.techStack?.join(', ') || '');
    setCategory(project.category || 'web');
    setImagePreviews(project.images);
    setImages([null, null, null]); // Reset file objects
  };

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'web', 'mobile', 'desktop', 'game', 'ai'];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Project Portfolio Admin</h1>
          <p className="text-gray-600">Manage your projects portfolio with ease</p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editId ? 'Edit Project' : 'Add New Project'}
                </h2>
                {projects.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors"
                    title="Clear all projects"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title*</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="My Awesome Project"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      rows={4}
                      placeholder="Describe your project..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Project Images {!editId && '(3 required)'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((index) => (
                        <div key={index} className="flex flex-col items-center">
                          <label className="w-full h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, index)}
                              className="hidden"
                              required={!editId && !imagePreviews[index]}
                            />
                            {imagePreviews[index] ? (
                              <img 
                                src={imagePreviews[index]} 
                                alt={`Preview ${index}`} 
                                className="h-full w-full object-cover rounded-lg"
                              />
                            ) : (
                              <span className="text-gray-400">Image {index + 1}</span>
                            )}
                          </label>
                          {editId && imagePreviews[index] && (
                            <button
                              type="button"
                              onClick={() => {
                                const updatedPreviews = [...imagePreviews];
                                updatedPreviews[index] = '';
                                setImagePreviews(updatedPreviews);
                                const updatedImages = [...images];
                                updatedImages[index] = null;
                                setImages(updatedImages);
                              }}
                              className="mt-1 text-xs text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Link</label>
                    <input
                      type="url"
                      value={githubLink}
                      onChange={(e) => setGithubLink(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="https://github.com/username/project"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Live Demo Link</label>
                    <input
                      type="url"
                      value={liveDemoLink}
                      onChange={(e) => setLiveDemoLink(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="https://myproject.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack (comma separated)</label>
                    <input
                      type="text"
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="desktop">Desktop App</option>
                      <option value="game">Game</option>
                      <option value="ai">AI/ML</option>
                    </select>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    >
                      {editId ? 'Update Project' : 'Add Project'}
                    </button>
                    
                    {editId && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Projects List */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <label htmlFor="category" className="sr-only">Category</label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Projects Count */}
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>

            {/* Projects Grid */}
            {filteredProjects.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-500">
                  {projects.length === 0 
                    ? "No projects found. Add your first project!" 
                    : "No projects match your search criteria."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image Gallery */}
                    <div className="h-48 overflow-hidden relative">
                      <div className="flex h-full transition-transform duration-300 hover:translate-x-[-66.666%]">
                        {project.images.map((img, idx) => (
                          img && (
                            <img 
                              key={idx} 
                              src={img} 
                              alt={`${project.title} ${idx + 1}`} 
                              className="h-full w-full object-cover flex-shrink-0"
                            />
                          )
                        ))}
                      </div>
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                        {project.images.filter(img => img).map((_, idx) => (
                          <span 
                            key={idx} 
                            className="w-2 h-2 rounded-full bg-white bg-opacity-80"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                      
                      {project.techStack?.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 text-sm mb-3">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:underline flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        )}
                        {project.liveDemoLink && (
                          <a 
                            href={project.liveDemoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEdit(project)}
                            className="text-yellow-600 hover:text-yellow-800"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(project.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}