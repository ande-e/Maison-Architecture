import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="group relative border-b border-r border-ink/10 h-[600px] flex flex-col justify-between p-8 hover-trigger overflow-hidden transition-all duration-1000 ease-in-out hover:bg-ink hover:text-stone cursor-none">
      
      {/* Header Info */}
      <div className="flex justify-between items-start z-10">
        <span className="font-sans text-xs tracking-widest uppercase opacity-60">
          {(index + 1).toString().padStart(2, '0')} — {project.category}
        </span>
        <span className="font-sans text-xs tracking-widest uppercase opacity-60">{project.year}</span>
      </div>

      {/* Main Content */}
      <div className="z-10 mt-auto">
        <h3 className="font-serif text-5xl md:text-6xl mb-4 italic leading-tight">
          {project.title}
        </h3>
        <p className="font-sans text-sm tracking-widest uppercase border-t border-current pt-4 inline-block">
          {project.location}
        </p>
      </div>

      {/* Hover Image Reveal */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out pointer-events-none grayscale">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Interaction Hint */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
        <div className="w-24 h-24 border border-stone/30 rounded-full flex items-center justify-center">
            <span className="font-sans text-xs text-stone tracking-widest">VIEW</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;