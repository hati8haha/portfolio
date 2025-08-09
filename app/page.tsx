'use client';

import LiquidGlass from "@/components/ui/LiquidGlass";
import ProjectModal from "@/components/ui/ProjectModal";
import CursorBlur from "@/components/ui/CursorBlur";

// Section Components
import {
  Header,
  HeroSection,
  ProjectsSection,
  CommunityWorkSection,
  AboutContactSection,
  Footer
} from "@/components/sections";

// Hooks and Types
import { useProjects } from "@/hooks/useProjects";

export default function Home() {
  const { modalProjects, selectedProject, isModalOpen, openProject, closeProject } = useProjects();

  return (
    <>
      <CursorBlur />
      <LiquidGlass />
      <div className="min-h-screen relative z-10">
        <div className="max-w-[1220px] mx-auto px-6 py-12">
          <Header />
          
          <main>
            <HeroSection />
            <ProjectsSection 
              projects={modalProjects} 
              onProjectClick={openProject} 
            />
            <CommunityWorkSection />
            <AboutContactSection />
            <Footer />
          </main>
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProject}
        />
      </div>
    </>
  );
}
