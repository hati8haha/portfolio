import { useState } from "react";
import { projects } from "@/components/sections/data";
import type { Project } from "@/types";

export const useProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert existing projects data to the modal format
  const modalProjects: Project[] = projects.map((project, index) => ({
    id: index.toString(),
    title: project.title,
    description: project.shortDescription,
    longDescription: `<div class="prose prose-invert">${project.description.replace(/\n/g, '<br/>')}</div>`,
    tech: project.techStack,
    image: project.coverImage,
    images: project.images,
    roles: project.roles,
    links: project.link ? project.link.map(l => ({ label: l.name, href: l.link })) : []
  }));

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return {
    modalProjects,
    selectedProject,
    isModalOpen,
    openProject,
    closeProject
  };
};
