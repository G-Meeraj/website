import { projects } from '../data';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      {/* Combined Projects Hero Section */}
      <section className="relative py-20 bg-black px-4 pt-32 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data science and analytics projects. Each project demonstrates my skills in data manipulation, 
            visualization, and machine learning to solve real-world problems.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <a 
                      href={project.blog} 
                      className="flex-1 text-center bg-gray-700 text-white py-2 rounded hover:bg-gray-600 transition duration-300"
                    >
                      Blog Post
                    </a>
                    <a 
                      href={project.github} 
                      className="flex-1 text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Skills Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'R', 'SQL', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Power BI', 'Tableau', 'Excel'].map((tech, index) => (
              <span key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Link 
              to="/skills"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition duration-300"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;