'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMinimize2 } from 'react-icons/fi'
import Carousel from '../motion/Carousel'
interface PortfolioCardProps {
  title: string
  image: string
  link: string
  description: string
}

const images = [
  'deerdonate-feature1.png',
  'donate-behavior1.gif',
  'donate-behavior2.gif',
  'meal-time-demo.png',
]

const projects = [
  {
    title: 'Deer Donate',
    image: 'deerdonate-feature1.png',
    link: 'https://deerdonate.herokuapp.com/',
    description: 'Leveling up livestreams! Real-time donations, transactions without the headache, and gamified interactions.'
  },
  {
    title: 'Deer Donate Console',
    image: 'donate-behavior1.gif',
    link: 'https://sakut-console.herokuapp.com/Login',
    description: 'Live stream insights: Fan donations, dynamic charts, gaming stats, and custom notifications, all in one platform.'
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
    description: 'Blending geo-info, 3D models, and visuals into an intuitive platform that gives you a city or global scope at your fingertips.'
  },
  {
    title: 'Meal Time',
    image: 'meal-time-demo.png',
    link: 'https://example.com/project1',
    description:
      "Turning surplus into supper! Our platform gives excess food a comeback, serving meals over waste. Dine sustainably in style!"
  },
  {
    title: 'WhiskerSoothe',
    image: 'WhiskerSoothe-demo.gif',
    link: 'https://example.com/project2',
    description:
      'Your go-to mobile app for tranquility. 3D animal models + relaxing white noise = ultimate unwinding.'
  }
]

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  link,
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
      <p className='text-gray-600 hidden md:inline text-sm'>{description}</p>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 sm:gap-8 relative place-content-stretch'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <motion.div
                layoutId={index.toString()}
                onClick={() => !selectedId && setSelectedId(index.toString())}
                className='h-full'
              >
                <PortfolioCard {...project} />
              </motion.div>
              <AnimatePresence>
                {selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    className='overlay-container absolute inset-16 flex flex-col gap-2 items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-12'
                  >
                    <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-4 lg:gap-16 justify-between h-full w-full'>
                      <div className='relative overflow-hidden rounded-lg'>
                      <Carousel images={images}/>

                      </div>
                      <div>aa</div>
                    </div>
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className='absolute right-4 top-4 text-xl text-gray-700 dark:text-bunker-200 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-500'
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
