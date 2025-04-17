import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, className }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className={`h-full flex flex-col bg-[#01016] rounded-lg border border-[#1E2B3B] 
                     hover:border-[#6366f1]/40 transition-colors duration-700 ${className}`}>
      {/* Image container with fixed aspect ratio */}
      <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
        <img
          src={Img}
          alt={Title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      
      {/* Content container */}
      <div className="flex flex-col flex-grow p-2">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">{Title}</h3>
        <p className="text-sm text-gray-400 mb-2 flex-grow">{Description}</p>
        
        {/* Button container - stays at bottom */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            {ProjectLink ? (
              <a
                href={ProjectLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span className="text-sm font-medium">Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-gray-500 text-sm">Demo Not Available</span>
            )}

            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span className="text-sm font-medium">Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-gray-500 text-sm">Details Not Available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;