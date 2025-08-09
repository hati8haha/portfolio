import Skills from './Skills';

const AboutContactSection = () => {

  return (
    <section id="about" className="mt-9 grid lg:grid-cols-[1fr_360px] gap-5">
      <div className="liquid-glass p-6">
        <h2 className="gradient-text text-2xl font-bold mb-4">About Me</h2>
        <p className="text-[var(--muted)] mb-4">
          I&apos;m a passionate frontend developer with 3+ years of experience creating 
          engaging web applications. I love exploring new technologies and pushing 
          the boundaries of what&apos;s possible in the browser.
        </p>
        <p className="text-[var(--muted)] mb-4">
          Currently focused on building performant React applications with modern 
          UI/UX principles, accessibility standards, and cutting-edge web technologies.
        </p>
        <div id="contact" className="flex gap-3 mt-6">
          <a href="mailto:contact@example.com" className="chip hover:bg-white/5 transition-colors no-underline">
            Email Me
          </a>
          <a href="https://github.com" className="chip hover:bg-white/5 transition-colors no-underline">
            GitHub
          </a>
          <a href="https://linkedin.com" className="chip hover:bg-white/5 transition-colors no-underline">
            LinkedIn
          </a>
        </div>
      </div>
      
      <Skills />
    </section>
  );
};

export default AboutContactSection;
