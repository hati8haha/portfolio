'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
interface PortfolioCardProps {
  title: string
  image: string
  link: string
  description: string
}

const projects = [
  {
    title: 'Deer Donate',
    image: 'deerdonate-feature1.png',
    link: 'https://deerdonate.herokuapp.com/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Deer Donate Console',
    image: 'donate-behavior1.gif',
    link: 'https://sakut-console.herokuapp.com/Login',
    description: 'Sed do eiusmod teme et dolore magna aliqua.'
  },
  {
    title: 'NADI Membership platform',
    image: 'donate-behavior2.gif',
    link: 'https://example.com/project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Geography Information Application Platform',
    image: 'giap-demo1.png',
    link: 'https://example.com/project2',
    description: 'Sed do eiusmod teme et dolore magna aliqua.'
  },
  {
    title: 'Meal Time',
    image: 'meal-time-demo.png',
    link: 'https://example.com/project1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Project 2',
    image: 'https://example.com/project2.png',
    link: 'https://example.com/project2',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  // Add more projects as needed
]

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  link,
  description
}) => {
  return (
    <div className='bg-gray-50 flex flex-col gap-0  sm:gap-2 dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all hover:shadow-lg'>
      <img
        src={image}
        alt={title}
        className='w-full h-0 md:h-48 object-cover  rounded-lg '
      />
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-gray-600 hidden md:inline'>{description}</p>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:underline hidden md:inline'
      >
        View Project
      </a>
    </div>
  )
}

const PortfolioSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedProject = () =>
    selectedId ? projects[parseInt(selectedId)] : projects[0]
  return (
    <section className='container mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8'>My Portfolio</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 sm:gap-8 relative'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <motion.div
                layoutId={index.toString()}
                onClick={() => setSelectedId(index.toString())}
              >
                <PortfolioCard {...project} />
              </motion.div>
              <AnimatePresence>
                {selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    className='-inset-4 flex flex-col gap-2 items-center justify-center backdrop-blur bg-transparent bg-opacity-20 p-4'
                  >
                    <PortfolioCard {...selectedProject()} />

                    <motion.button onClick={() => setSelectedId(null)}>
                      CLose
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PortfolioSection
