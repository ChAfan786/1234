import React from 'react';
import { 
  FaUserTie, 
  FaLaptopCode, 
  FaLightbulb, 
  FaRocket, 
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaHandshake
} from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <div className="inline-block relative mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-2">
            About Me
          </h1>
          <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </div>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="text-amber-400 font-semibold">Muhammad Afan</span>, a passionate <span className="text-amber-300 font-bold">Full Stack Developer</span> and <span className="text-amber-300 font-bold">Tech Entrepreneur</span> dedicated to building digital solutions that make an impact.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Personal Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <FaUserTie className="text-2xl text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">Professional Profile</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              As the Founder & CEO of <span className="text-amber-400 font-semibold">Next Code Solution (SMC-Private) Limited</span>, I lead a team that delivers cutting-edge digital solutions to clients worldwide.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With <span className="text-amber-300 font-bold">1+ year of hands-on development experience</span>, I specialize in creating full-stack applications that are both visually stunning and technically robust.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <FaLightbulb className="text-2xl text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">My Philosophy</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in <span className="text-amber-300 font-bold">clean code</span>, <span className="text-amber-300 font-bold">user-centric design</span>, and <span className="text-amber-300 font-bold">scalable architecture</span>. Technology should solve real problems while delivering exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 p-8 rounded-2xl border-l-4 border-amber-500">
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <FaBriefcase className="text-2xl text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-amber-400">Founder & CEO</h3>
                <p className="text-gray-400">Next Code Solution Private Limited</p>
                <p className="text-gray-500">2025 - Present</p>
                <p className="text-gray-300 mt-2">Leading a team of developers to deliver custom software solutions for diverse clients.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-400">Full Stack Developer</h3>
                <p className="text-gray-400">Freelance</p>
                <p className="text-gray-500">2024-Present</p>
                <p className="text-gray-300 mt-2">Developed web applications and digital solutions for various clients and startups.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border-l-4 border-amber-500">
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4">
                <FaGraduationCap className="text-2xl text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-amber-400">Matriculation - Computer Science</h3>
<p className="text-gray-400">New Beacon House</p>
<p className="text-gray-500">2020 - 2024</p>
<p className="text-gray-300 mt-2">I completed my Matriculation with a focus on Computer Science, developing a strong foundation in computing and problem-solving from an early stage.</p>

              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-400">Certifications</h3>
<ul className="list-disc list-inside text-gray-300 space-y-1">
  <li>Frontend Development Certification (2024)</li>
  <li>Full Stack Development Certification (2025)</li>
  <li>Internship Completion Certificate - Software Development (2025)</li>
</ul>

              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800 p-8 rounded-2xl mb-20 border-l-4 border-amber-500">
          <div className="flex items-center mb-8">
            <div className="bg-amber-500 p-3 rounded-full mr-4">
              <FaTools className="text-2xl text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Tools & More</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>Figma</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 p-8 rounded-2xl mb-20 border-l-4 border-amber-500">
          <div className="flex items-center mb-8">
            <div className="bg-amber-500 p-3 rounded-full mr-4">
              <FiAward className="text-2xl text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-white">Key Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-300 mb-2">Successful Projects</h3>
              <p className="text-gray-300">
                Delivered 15+ web applications and digital solutions for clients across various industries, achieving 100% client satisfaction.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-300 mb-2">Business Growth</h3>
              <p className="text-gray-300">
                Grew Next Code Solution from a solo venture to a team of 5 professionals within the first year of operation.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-300 mb-2">Technical Innovation</h3>
              <p className="text-gray-300">
                Implemented cutting-edge technologies like serverless architecture and JAMstack to improve performance and scalability.
              </p>
            </div>
            
            <div className="bg-gray-700/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-300 mb-2">Client Impact</h3>
              <p className="text-gray-300">
                Helped clients increase their online engagement by an average of 200% through custom digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Work Philosophy */}
        <div className="bg-gradient-to-r from-amber-900/30 to-amber-900/10 p-8 rounded-2xl border-l-4 border-amber-500 mb-20">
          <div className="flex items-center mb-6">
            <div className="bg-amber-500 p-3 rounded-full mr-4">
              <FaHandshake className="text-2xl text-gray-900" />
            </div>
            <h2 className="text-2xl font-bold text-white">My Work Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Client Focus</h3>
              <p className="text-gray-300">
                I prioritize understanding your business needs and goals to deliver solutions that provide real value, not just code.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                Every line of code is written with attention to performance, security, and maintainability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Continuous Learning</h3>
              <p className="text-gray-300">
                I stay updated with the latest technologies and best practices to deliver modern solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Transparent Process</h3>
              <p className="text-gray-300">
                Clear communication and regular updates ensure you're always informed about project progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;