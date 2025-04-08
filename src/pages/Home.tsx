import { Github, Linkedin, Mail, Phone, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      {/* Combined Hero and About Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20 md:pt-0">
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 max-w-5xl py-12 md:py-0">
          <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
            <img 
              src="https://i.ibb.co/pmPH4qz/profile1.jpg"
              alt="profile1"
              className="w-48 md:w-64 h-auto aspect-[3/4] md:aspect-[9/16] object-cover rounded-lg border-4 border-gray-600 shadow-xl"
            />
          </div>
          <div className="md:flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Meeraj Ahmad Gonnuru</h2>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-blue-300 font-semibold">Data Scientist / Data Analyst</p>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-300">
              Welcome! Explore data, insights, and innovation. We're here to help you unlock the power of information.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              I'm a passionate Data Scientist and Analyst with a strong foundation in statistics, machine learning, and data visualization. I specialize in turning complex datasets into actionable insights that drive strategic decisions and business growth.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
              With hands-on experience in Python, R, SQL, and tools like Pandas, Scikit-learn, Power BI, and Tableau, I've built and deployed models for predictive analytics, classification problems, and trend analysis across various domains.
            </p>
            <div className="space-x-2 md:space-x-4">
              <a 
                href="https://drive.google.com/file/d/1MV8jMpXBNrDUa2PhGPk1ka-CiMdy-C9R/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg transition duration-300 text-sm md:text-base shadow-lg hover:shadow-blue-500/50"
              >
                Download Resume
              </a>
              <Link 
                to="/contact" 
                className="bg-white/20 hover:bg-white/30 text-white px-4 md:px-8 py-2 md:py-3 rounded-lg transition duration-300 text-sm md:text-base shadow-lg hover:shadow-white/20"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">My Projects</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of data science projects showcasing skills in machine learning, 
            data visualization, and predictive analytics.
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:translate-y-[-2px]"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Get In Touch</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:meerajahmadgonnuru@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition duration-300 group">
              <Mail className="w-6 h-6 group-hover:text-blue-400" />
              meerajahmadgonnuru@gmail.com
            </a>
            <a href="tel:+919502553535" className="flex items-center gap-2 hover:text-blue-400 transition duration-300 group">
              <Phone className="w-6 h-6 group-hover:text-blue-400" />
              +919502553535
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" icon={<Linkedin />} />
            <SocialLink href="https://x.com/GMeeraj" icon={<Twitter />} />
            <SocialLink href="https://github.com/G-Meeraj" icon={<Github />} />
            <SocialLink href="https://www.youtube.com/@kolamax7845" icon={<Youtube />} />
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:translate-y-[-2px]"
            >
              Send Me a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-600/40 transition duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );
}

export default Home;
