import React from 'react';
import PortfolioCard from './PortofolioCard';

const projects = [
  {
    title: 'Project 1',
    image: 'https://example.com/project1.png',
    link: 'https://example.com/project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project 2',
    image: 'https://example.com/project2.png',
    link: 'https://example.com/project2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Project 1',
    image: 'https://example.com/project1.png',
    link: 'https://example.com/project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project 2',
    image: 'https://example.com/project2.png',
    link: 'https://example.com/project2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },  {
    title: 'Project 1',
    image: 'https://example.com/project1.png',
    link: 'https://example.com/project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project 2',
    image: 'https://example.com/project2.png',
    link: 'https://example.com/project2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more projects as needed
];

const PortfolioSection: React.FC = () => {
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
