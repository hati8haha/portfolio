const AboutContactSection = () => {
  const skills = [
    { skill: "React & Next.js", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "CSS & Tailwind", level: 95 },
    { skill: "Three.js & WebGL", level: 80 },
    { skill: "Node.js", level: 85 }
  ];

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
      
      <div className="glass-card p-6">
        <h3 className="font-bold text-white mb-4">Skills & Technologies</h3>
        <div className="space-y-3">
          {skills.map((item) => (
            <div key={item.skill}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">{item.skill}</span>
                <span className="text-[var(--muted)]">{item.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContactSection;
