import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import Swal from 'sweetalert2';

// Static projects data - export it so it can be imported in Portofolio.jsx
export const PROJECTS_DATA = [
  {
    id: 1,
    Title: "Health care Chatbot",
    Description: "A healthcare chatbot project aims to develop an AI-powered virtual assistant that provides patients with convenient access to medical information, symptom analysis, and guidance.",
    Img: "https://miro.medium.com/v2/resize:fit:1400/1*KT-dZRwMOA1KuTzVOomxHw.gif",
    Link: "http://www.linkedin.com/in/meeraj-ahmad-gonnuru-406ab2330",
    Github: "https://github.com/G-Meeraj/Health-Care-Chatbot",
    TechStack: ["Python", "Machine Learning", "Flask","Html","Css","OpenAI","React"],
    Features: [
      "Users can input symptoms to receive possible disease predictions.",
      "The healthcare chatbot uses machine learning models to predict diseases based on user-reported symptoms, providing personalized healthcare advice and guidance.",
      "Develop an intuitive UI with HTML, CSS, and JavaScript",
      "Deploy the chatbot as a web service using Flask and test it to ensure its effectiveness in providing healthcare assistance."
    ]
  },
  {
    id: 2,
    Title: "Heart Disease Prediction",
    Description: "This project is a Heart Disease Prediction web application built using Flask and Machine Learning. The model predicts the likelihood of a person having heart disease based on various input parameters.",
    Img: "https://media.licdn.com/dms/image/v2/D5622AQEvzdaHJ0oXkw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1707987384761?e=2147483647&v=beta&t=fO8P09T0lXA_N1e5jtVTk1QGuaPPzy7SUES3vP1Z6aU",
    Link: "https://www.linkedin.com/posts/meeraj-ahmad-gonnuru-406ab2330_machinelearning-heartdiseaseprediction-aiinhealthcare-activity-7316398949693624322-AWjy?utm_source=share&utm_medium=member_android&rcm=ACoAAFN0wsYBDwo8yxAlkBL7UcKD71I-blOj5yo",
    Github: "https://github.com/G-Meeraj/Heart-Disease-Prediction",
    TechStack: ["Python", "Machine Learning", "Flask","Html","Css"],
    Features: [
      "Easy-to-use web form for inputting health metrics",
      "Machine learning model predicts likelihood of heart disease",
      "Provides heart health tips based on prediction",
      "Clean, healthcare-themed interface (customizable with HTML/CSS)",
    ]
  },
  {
    id: 3,
    Title: "Flight Fare Prediction",
    Description: "This project is a Flight Price Prediction web application built using Flask and Machine Learning. The model predicts the price of flight tickets based on various input parameters.",
    Img: "https://miro.medium.com/v2/resize:fit:1400/0*3_PnJ1Bt1tVJ8Ssd.gif",
    Link: "https://www.linkedin.com/posts/meeraj-ahmad-gonnuru-406ab2330_machinelearning-flask-internshipproject-activity-7317452566433267713-Kubj?utm_source=share&utm_medium=member_android&rcm=ACoAAFN0wsYBDwo8yxAlkBL7UcKD71I-blOj5yo",
    Github: "https://github.com/G-Meeraj/Flight-Price-Prediction",
    TechStack: ["Python", "Machine Learning", "Flask","Html","Css"],
    Features: [
      "Predicts flight ticket prices based on user inputs.",
      "PUtilizes a trained Machine Learning model.",
      "SFlask-based web application with an interactive frontend.",
      "Supports categorical data encoding for better predictions.",
      "Simple and easy-to-use interface."
    ]
  },
  {
    id: 4,
    Title: "Health Insurance Prediction",
    Description: "This project aims to build a web-based application that predicts individual health insurance costs based on user input using a trained machine learning model. The model considers various features such as age, gender, BMI, smoking status, and region to provide an estimated insurance premium.",
    Img: "https://user-images.githubusercontent.com/91398845/207703224-2d95afc5-b18b-4323-8e39-1d1dab8e95b9.png",
    Link: "https://www.linkedin.com/posts/meeraj-ahmad-gonnuru-406ab2330_machinelearning-flask-datascience-activity-7318901786726027266-hAtj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFN0wsYBDwo8yxAlkBL7UcKD71I-blOj5yo",
    Github: "https://github.com/G-Meeraj/Health-Insurance-Prediction",
    TechStack: ["Python", "Machine Learning", "Flask","Html","Css"],
    Features: [
      "Predicts Health Insurance Prediction based on user inputs.",
      "PUtilizes a trained Machine Learning model",
      "SFlask-based web application with an interactive frontend.",
      "Supports categorical data encoding for better predictions.",
      "Simple and easy-to-use interface."
    ]
  },
  {
    id: 5,
    Title: "Bike rental",
    Description: "The goal of this project is to develop a machine learning model that accurately predicts the number of bikes rented on a given day based on various environmental and seasonal factors. This can help bike rental companies optimize inventory, staffing, and maintenance schedules.",
    Img: "https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/desktop/rbx_banner-a8582ea39f40667b3c94a9bc269a69effb6be8ce78f2f7c6aab995f51469c6c9.webp",
    Link: "http://www.linkedin.com/in/meeraj-ahmad-gonnuru-406ab2330",
    Github: "https://github.com/G-Meeraj/G-Meeraj-Bike-Rental-Prediction-",
    TechStack: ["Python", "Machine Learning", "Flask","Html","Css"],
    Features: [
      "Predicts Bike rental based on user inputs.",
      "PUtilizes a trained Machine Learning model",
      "SFlask-based web application with an interactive frontend.",
      "Supports categorical data encoding for better predictions.",
      "Simple and easy-to-use interface."
    ]
  },
  {
    id: 6,
    Title: "Surveillance Robot Based On IoT",
    Description: "A robot that can detect metals and objects, controlled by Arduino microcontroller using internet for surveillance purposes.",
    Img: "https://hackster.imgix.net/uploads/attachments/1478489/fx8-mnk4sto-hd_TKzmvLfKQr.jpg?auto=compress%2Cformat&w=1280&h=960&fit=max",
    Link: "https://drive.google.com/file/d/1AneQ3H60V0Rta1IyU94G-0sHmpf405r4/view",

    TechStack: ["IDE:Arduino IDE.", "Embedded C", "Wi-Fi module", "Solar panels", "Arduino"],
    Features: [
      "A robot to perform the act of surveillance in domestic areas.",
      "It can be used for the security performance and also speed be increased by using this type of vehicle.",
      "The purpose of this robot is to roam around and provide audio and video information from the given environment and to send that obtained information to the user.",
    ]
  }
  // Add more projects as needed
];

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const GITHUB_PROFILE = {
  username: "G-Meeraj",
  url: "https://github.com/G-Meeraj",
  description: "View all my projects on GitHub"
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Total Technologies</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-white/5 p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-gray-400">Key Features</div>
        </div>
      </div>
    </div>
  );
};

const GitHubProfileCard = () => (
  <a 
    href={GITHUB_PROFILE.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 p-4 mb-8"
  >
    <div className="flex items-center gap-4">
      <Github className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
          {GITHUB_PROFILE.username}
        </h3>
        <p className="text-sm text-gray-400">
          {GITHUB_PROFILE.description}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors ml-auto" />
    </div>
  </a>
);

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'Maaf, source code untuk proyek ini bersifat privat.',
      confirmButtonText: 'Mengerti',
      confirmButtonColor: '#3085d6',
      background: '#030014',
      color: '#ffffff'
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find project from static data instead of localStorage
    const selectedProject = PROJECTS_DATA.find((p) => String(p.id) === id);
    
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-white">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate">{project.Title}</span>
            </div>
          </div>

          {/* Add the GitHub Profile Card here */}
          <GitHubProfileCard />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* Action buttons */}
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Live Demo</span>
                </a>

                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                  onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Github</span>
                </a>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-gray-400 opacity-50">No technologies added.</p>
                )}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={project.Img}
                  alt={project.Title}
                  className="w-full  object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
                  onLoad={() => setIsImageLoaded(true)}
                />
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl" />
              </div>

              {/* Fitur Utama */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Key Features
                </h3>
                {project.Features.length > 0 ? (
                  <ul className="list-none space-y-2">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 opacity-50">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
