import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images?: string[];
  roles: string[];
  links: { label: string; href: string }[];
}

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectsSection = ({ projects, onProjectClick }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-2xl font-bold gradient-text mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="glass-card-light gpu-accelerated p-4 flex flex-col gap-3 cursor-pointer"
            onClick={() => onProjectClick(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onProjectClick(project);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            <div className="h-40 rounded-xl overflow-hidden relative">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4">
                <span className="text-white font-semibold text-sm">View Project</span>
              </div>
            </div>
            <h3 className="font-bold text-white m-0">{project.title}</h3>
            <p className="text-[var(--muted)] text-sm m-0 line-clamp-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span key={tech} className="chip-light text-xs">{tech}</span>
              ))}
              {project.tech.length > 3 && (
                <span className="chip-light text-xs">+{project.tech.length - 3} more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
