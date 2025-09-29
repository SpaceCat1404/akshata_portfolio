import React, { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
type Project = (typeof portfolioData.projects)[0];
export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <AnimatedSection>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold uppercase tracking-wider border-b-2 border-black pb-4 mb-12">
          Signature Projects
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.title}
              className="card-brutal flex flex-col justify-between cursor-pointer transition-all duration-200 hover:shadow-brutal-green"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              role="button"
              tabIndex={0}
            >
              <div>
                <h3 className="font-mono text-2xl font-bold uppercase">{project.title}</h3>
                <p className="font-sans text-base mt-2">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-black font-mono">{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent 
          className="max-w-4xl w-full bg-brutal-white border-2 border-black p-0"
          aria-describedby={selectedProject ? "project-description" : undefined}
        >
          {selectedProject && (
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="font-mono text-3xl font-bold uppercase tracking-wider">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription id="project-description" className="font-sans text-lg pt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                {selectedProject.gif && selectedProject.gif !== "/placeholder.gif" ? (
                  <img src={selectedProject.gif} alt={`${selectedProject.title} demo`} className="w-full border-2 border-black" />
                ) : (
                  <div className="w-full aspect-video bg-muted border-2 border-black flex items-center justify-center">
                    <p className="font-mono text-muted-foreground">Demo GIF not available</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-black font-mono text-sm">{tech}</Badge>
                  ))}
                </div>
                <div className="flex-grow" />
                <div className="flex items-center gap-2">
                  {selectedProject.repoUrl !== "#" && (
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal shadow-brutal-black !px-4 !py-2 hover:shadow-brutal-purple">
                      <Github className="mr-2 h-5 w-5" /> Repo
                    </a>
                  )}
                  {selectedProject.demoUrl !== "#" && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-brutal shadow-brutal-black !px-4 !py-2 hover:shadow-brutal-green">
                      <ExternalLink className="mr-2 h-5 w-5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}