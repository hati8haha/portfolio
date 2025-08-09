'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import { Project, ProjectModalProps } from '@/types';

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      document.body.style.overflow = '';
      setIsAnimating(false);
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Use project images if available, otherwise use the cover image
  const carouselImages = project.images && project.images.length > 0 
    ? project.images.map(img => img.startsWith('/') ? img : `/${img}`)
    : [project.image];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-6xl bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button 
                  onClick={onClose}
                  className="absolute right-4 top-4 z-30 bg-black/50 hover:bg-black/70 text-white/70 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 font-medium text-sm"
                >
                  ✕ Close
                </button>

                {/* Content Container with proper scroll */}
                <div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-6 pr-20">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text">{project.title}</h2>
                    </div>

                    {/* Main Layout */}
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                      {/* Left Column - Content */}
                      <div className="space-y-6">
                        {/* Image Carousel */}
                        <div className="w-full aspect-video bg-gradient-to-br from-white/5 to-white/2 rounded-xl overflow-hidden border border-white/10">
                          <ImageCarousel 
                            images={carouselImages}
                            autoPlay={true}
                            interval={5000}
                            className="w-full h-full"
                          />
                        </div>
                        
                        {/* Description with proper scrolling */}
                        <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                          <div className="max-h-96 overflow-y-auto custom-scrollbar pr-2">
                            <div 
                              className="prose prose-invert prose-sm md:prose-base max-w-none
                                         prose-headings:text-white prose-headings:font-semibold prose-headings:mb-3
                                         prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                                         prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                                         prose-code:bg-white/10 prose-code:text-blue-300 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                                         prose-pre:bg-black/30 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:p-4
                                         prose-blockquote:border-l-blue-400 prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic
                                         prose-ul:text-gray-300 prose-ol:text-gray-300
                                         prose-li:text-gray-300 prose-li:mb-1
                                         prose-strong:text-white prose-strong:font-semibold" 
                              dangerouslySetInnerHTML={{ __html: project.longDescription }} 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Metadata */}
                      <div className="space-y-4">
                        {/* Roles */}
                        <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            Roles
                          </h3>
                          <ul className="space-y-2">
                            {project.roles.map((role, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1 h-1 bg-blue-400/60 rounded-full"></span>
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                              <span 
                                key={index} 
                                className="bg-white/10 border border-white/20 text-gray-300 px-3 py-1 rounded-lg text-xs font-medium hover:bg-white/15 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {project.links.length > 0 && (
                          <div className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              Links
                            </h3>
                            <div className="space-y-2">
                              {project.links.map((link, index) => (
                                <a 
                                  key={index}
                                  href={link.href}
                                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:bg-blue-300"></span>
                                  {link.label}
                                  <svg className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
