'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMinimize2 } from 'react-icons/fi'
import Carousel from '../motion/Carousel'

type TechStackType =
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Redux'
  | 'Next.js'
  | 'Jest'
  | 'i18next'
  | 'CSS'
  | 'HTML'
  | 'Styled-components'
  | 'Tailwind CSS'
  | 'MUI'
  | 'RWD'
  | 'Webpack'
  | 'Flutter'
  | 'Dart'
  | 'Node.js'
  | 'Express'
  | 'Restful API'
  | 'PostgreSQL'
  | 'NoSQL'
  | 'Microservices'
  | 'Serverless'
  | 'Nginx'
  | 'GCP'
  | 'AWS'
  | 'Linux'
  | 'Docker'
  | 'CI/CD'
  | 'Git'

interface ProjectData {
  title: string
  coverImage: string
  images: string[]
  shortDescription: string
  techStack: TechStackType[]
  description: string
  link?: string
}

interface PortfolioCardProps {
  title: string
  image: string
  description: string
}

interface PortfolioCardExpandProps {
  title: string
  images: string[]
  link: string
  description: string
  techStack: TechStackType[]
}

const images = [
  'deerdonate-feature1.png',
  'donate-behavior1.gif',
  'donate-behavior2.gif',
  'meal-time-demo.png'
]

const projects: ProjectData[] = [
  {
    title: 'Deer Donate',
    coverImage: 'deerdonate-feature1.png',
    shortDescription:
      'Leveling up livestreams! Real-time donations, transactions without the headache, and gamified interactions.',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    description:
      'Leveling up livestreams! Real-time donations, transactions without the headache, and gamified interactions.',
    images: [
      'deerdonate-feature1.png',
      'donate-behavior1.gif',
      'donate-behavior2.gif',
      'meal-time-demo.png'
    ]
  },
  {
    title: 'Deer Donate Console',
    coverImage: 'donate-behavior1.gif',
    shortDescription:
      'Live stream insights: Fan donations, dynamic charts, gaming stats, and custom notifications, all in one platform.',
    description: 'desc',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    images: [],
    link: 'https://sakut-console.herokuapp.com/Login'
  },
  {
    title: 'NADI Membership platform',
    coverImage: 'donate-behavior2.gif',
    shortDescription: '',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: [],
    link: 'https://example.com/project1'
  },
  {
    title: 'Geography Information Application Platform',
    coverImage: 'giap-demo1.png',
    link: 'https://example.com/project2',
    shortDescription:
      'Blending geo-info, 3D models, and visuals into an intuitive platform that gives you a city or global scope at your fingertips.',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: []
  },
  {
    title: 'Meal Time',
    coverImage: 'meal-time-demo.png',
    shortDescription:
      'Turning surplus into supper! Our platform gives excess food a comeback, serving meals over waste. Dine sustainably in style!',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: [],
    link: 'https://example.com/project1'
  },
  {
    title: 'WhiskerSoothe',
    coverImage: 'WhiskerSoothe-demo.gif',
    shortDescription:
      'Your go-to mobile app for tranquility. 3D animal models + relaxing white noise = ultimate unwinding.',
    techStack: ['React', 'TypeScript', 'Styled-components', 'Serverless'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: [],
    link: 'https://example.com/project1'
  }
]

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  description
}) => {
  return (
    <div className='flex flex-col gap-0 sm:gap-2 h-full bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all hover:shadow-lg'>
      <img
        src={image}
        alt={title}
        className='w-full h-0 md:h-48 object-cover  rounded-lg '
      />
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='text-gray-700 dark:text-bunker-200 hidden md:inline text-sm'>
        {description}
      </p>
    </div>
  )
}

const PortfolioCardExpand: React.FC<PortfolioCardExpandProps> = ({
  title,
  description,
  images,
  link,
  techStack
}) => {
  return (
    <div className='grid grid-cols-1 sm:lg:grid-cols-2 md:grid-cols-1 grid-rows-2 sm:lg:grid-rows-1 md:grid-rows-2  gap-4 lg:gap-16 justify-between h-full w-full'>
      <div className='relative overflow-hidden rounded-lg'>
        <Carousel images={images} />
      </div>
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-700 dark:text-bunker-200  text-sm'>
          {description}
        </p>
      </div>
    </div>
  )
}

const PortfolioSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedProject = () =>
    selectedId ? projects[parseInt(selectedId)] : projects[0]
  return (
    <section className='container mx-auto py-20'>
      <h2 className='text-4xl font-bold mb-8 text-bunker-600 dark:text-bunker-300'>
        My Portfolio
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 sm:gap-8 relative place-content-stretch'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <motion.div
                layoutId={index.toString()}
                onClick={() => !selectedId && setSelectedId(index.toString())}
                className='h-full'
              >
                <PortfolioCard
                  title={project.title}
                  description={project.shortDescription}
                  image={project.coverImage}
                />
              </motion.div>
              <AnimatePresence>
                {selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    className='overlay-container absolute inset-0 md:inset-16 flex flex-col gap-2 items-center justify-center bg-gray-50 dark:bg-gray-800  rounded-lg shadow-lg p-8 md:p-12'
                  >
                    <div className='grid grid-cols-1 sm:lg:grid-cols-2 md:grid-cols-1 grid-rows-2 sm:lg:grid-rows-1 md:grid-rows-2  gap-4 lg:gap-16 justify-between h-full w-full'>
                      <div className='relative overflow-hidden rounded-lg'>
                        <Carousel images={images} />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold'>
                          {selectedProject().title}
                        </h3>
                        <p className='text-gray-700 dark:text-bunker-200  text-sm'>
                          {selectedProject().description}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className='absolute right-4 top-4 text-xl text-gray-700 dark:text-bunker-200 hover:text-gray-900 dark:hover:text-bunker-50 transition-colors duration-500'
                    >
                      <FiMinimize2 />
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
