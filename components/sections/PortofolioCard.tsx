import React from 'react';

interface PortfolioCardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, image, link, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all hover:shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Project
      </a>
    </div>
  );
};

export default PortfolioCard;
