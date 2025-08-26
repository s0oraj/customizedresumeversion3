import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function Projects() {
  const projects = [{
    title: 'Advanced Coding Interview Patterns (ACIP)',
    link: 'https://acip.vercel.app/',
    repo: 'https://github.com/s0oraj/acip',
    technologies: 'React, Vite, Three.js, Framer-motion-3D, Zustand',
    points: [
      'Built <span style="font-weight: 600; color: var(--resume-accent-primary)">GPU-accelerated 3D galaxy UI</span> with Solar systems as individual Coding Roadmaps, <span style="font-weight: 600; color: var(--resume-accent-primary)">500K stars at 60 FPS</span>, optimizing vertices with <span style="font-weight: 600; color: var(--resume-accent-primary)">Three.js</span> buffers and <span style="font-weight: 600; color: var(--resume-accent-primary)">Level of Detail (LOD)</span>', 
      '<span style="font-weight: 600; color: var(--resume-accent-primary)">Algorithm Pattern Engine</span>: Implemented <span style="font-weight: 600; color: var(--resume-accent-primary)">51 interactive step-by-step UX visualizations</span> for each algorithm pattern, demonstrating code execution through synchronized animations using <span style="font-weight: 600; color: var(--resume-accent-primary)">framer-motion</span>', 
      'Devised Coding Roadmap\'s Minimap with <span style="font-weight: 600; color: var(--resume-accent-primary)">2D/3D mode switching</span>, real-time dual-camera sync via <span style="font-weight: 600; color: var(--resume-accent-primary)">3D graphics programming using quaternion-based camera transforms</span>, world-space frustum culling, & trigonometric FOV/2'
    ]
  }, {
    title: 'ACIP Backend - Pattern Tracker',
    link: 'https://github.com/s0oraj/pattern-tracker',
    repo: 'https://github.com/s0oraj/pattern-tracker',
    technologies: 'Spring Boot, OAuth2, PostgreSQL, JPA/Hibernate, Maven',
    points: [
      'Built <span style="font-weight: 600; color: var(--resume-accent-primary)">Spring Boot REST API</span> with <span style="font-weight: 600; color: var(--resume-accent-primary)">Google OAuth2</span> and <span style="font-weight: 600; color: var(--resume-accent-primary)">JWT authentication</span> for secure user sessions', 
      'Designed <span style="font-weight: 600; color: var(--resume-accent-primary)">PostgreSQL database schema</span> with <span style="font-weight: 600; color: var(--resume-accent-primary)">JPA/Hibernate ORM</span> and optimized query performance', 
      'Implemented <span style="font-weight: 600; color: var(--resume-accent-primary)">question tracking system</span> with <span style="font-weight: 600; color: var(--resume-accent-primary)">CRUD operations</span> across 220+ coding interview patterns'
    ]
  }];

  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-4 mt-3">
        {projects.map((project, index) => 
          <div key={index} style={{ backgroundColor: 'var(--resume-bg-section)' }} className="p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--resume-text-heading)' }}>
                  {project.title}
                  <span className="font-normal italic ml-2" style={{ color: 'var(--resume-accent-primary)' }}>
                    | {project.technologies}
                  </span>
                </h3>
              </div>
              <div className="flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--resume-bg-subtle)', color: 'var(--resume-text-secondary)' }}>
                  <ExternalLinkIcon size={10} className="mr-1" style={{ color: 'var(--resume-accent-primary)' }} />
                  Demo
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--resume-bg-subtle)', color: 'var(--resume-text-secondary)' }}>
                  <GithubIcon size={10} className="mr-1" style={{ color: 'var(--resume-accent-primary)' }} />
                  Repo
                </a>
              </div>
            </div>
            <ul className="space-y-1 mt-3">
              {project.points.map((point, idx) => 
                <li key={idx} className="flex items-start text-lg" style={{ color: 'var(--resume-text-muted)' }}>
                  <span className="mr-2 mt-0.5" style={{ color: 'var(--resume-accent-primary)' }}>•</span>
                  <span dangerouslySetInnerHTML={{
                    __html: point
                  }}></span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}