import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Remove the # from the href to get the element ID
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Use smooth scrolling with offset for header
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#community", label: "Community" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="relative mb-7">
      {/* Main header container */}
      <div className="flex items-center justify-between gap-4">
        {/* Logo and name section */}
        <div className="flex flex-row gap-3 items-center min-w-0">
          <div className="w-11 h-11 rounded-[10px] bg-gradient-to-b from-[#7be7ff] to-[#b58cff] flex items-center justify-center font-extrabold text-[#051020] shadow-[0_8px_30px_rgba(11,19,28,0.6),inset_0_-6px_18px_rgba(255,255,255,0.06)] flex-shrink-0">
            HC
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">Haoting Cheng</h1>
            <p className="text-xs sm:text-sm text-[var(--muted)] truncate">Full-Stack Developer</p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav aria-label="Top navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleLinkClick(link.href)}
              className="text-[var(--muted)] no-underline font-semibold text-sm hover:text-white transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-a)] focus:ring-opacity-50 rounded-md"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 mt-4 liquid-glass rounded-lg p-4 z-50"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="text-[var(--muted)] no-underline font-semibold text-sm hover:text-white transition-colors duration-200 py-2 px-3 rounded-md hover:bg-white/5 text-left bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
