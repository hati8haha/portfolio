'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMinimize2 } from 'react-icons/fi'
import Carousel from '../motion/Carousel'
import Image from 'next/image'
import { LinkButton, TechStackType, allSKills, projects } from './data'
import { IconType } from 'react-icons'
import Tooltip from '../ui/Tooltip'
import OnScrollInViewAnimation from '../motion/OnScrollInViewAnimation'

interface PortfolioCardProps {
  title: string
  image: string
  description: string
  techStack: TechStackType[]
}

interface PortfolioCardExpandProps {
  title: string
  images: string[]
  description: string
  techStack: TechStackType[]
  link?: LinkButton[]
}

const PortfolioCard = ({
  title,
  image,
  description,
  techStack
}: PortfolioCardProps) => {
  return (
    <div className='flex justify-between sm:justify-start sm:flex-col gap-0 sm:gap-2 h-full bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-4 transition-all hover:shadow-lg '>
      <div className='w-full hidden md:block h-48 object-cover relative rounded-lg overflow-hidden '>
        <Image
          src={image}
          alt={title}
          fill
          objectFit='cover'
          objectPosition='center'
          className='transition-all hover:scale-105 '
        />
      </div>

      <h3 className='text-lg font-semibold'>{title}</h3>
      <div className='flex flex-wrap gap-2  text-lg'>
        {techStack.map((item) => {
          const skill = allSKills.find((skill) => skill.name === item)
          if (!skill) return
          const SkillIcon: IconType = skill.icon
          const logoColor = skill.color
          return (
            <Tooltip text={skill.name} key={skill.name}>
              <SkillIcon color={logoColor} />
            </Tooltip>
          )
        })}
      </div>
      <p className='text-gray-700 dark:text-bunker-200 hidden md:inline text-sm'>
        {description}
      </p>
    </div>
  )
}

const PortfolioCardExpand = ({
  title,
  description,
  images,
  link
}: PortfolioCardExpandProps) => {
  return (
    <div className='grid grid-cols-1 sm:lg:grid-cols-2 md:grid-cols-1 grid-rows-2 sm:lg:grid-rows-1 md:grid-rows-2  gap-4 lg:gap-16 justify-between h-full w-full'>
      <div className='relative overflow-hidden rounded-lg'>
        <Carousel images={images} imgClassName=' object-cover object-center' />
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='grow-1 overflow-y-auto'>
          <p className='text-gray-700 dark:text-bunker-200  text-sm whitespace-pre-line'>
            {description}
          </p>
        </div>
        <div className='flex gap-2'>
          {link?.map((item, index) => (
            <a
              key={index}
              target='_blank'
              href={item.link}
              className='bg-bunker-600 text-white px-4 py-2 rounded hover:bg-bunker-700 transition-colors'
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const PortfolioSection = () => {
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
              <OnScrollInViewAnimation>
                <motion.div
                  layoutId={index.toString()}
                  onClick={() => !selectedId && setSelectedId(index.toString())}
                  className='h-full cursor-pointer'
                >
                  <PortfolioCard
                    title={project.title}
                    description={project.shortDescription}
                    image={project.coverImage}
                    techStack={project.techStack}
                  />
                </motion.div>
              </OnScrollInViewAnimation>
            </div>
          )
        })}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className=' overlay-container absolute inset-0 md:inset-16 flex flex-col gap-2 items-center justify-center bg-gray-50 dark:bg-gray-800  rounded-lg shadow-lg p-8 md:p-12'
            >
              <PortfolioCardExpand
                title={selectedProject().title}
                description={selectedProject().description}
                images={selectedProject().images}
                link={selectedProject()?.link}
                techStack={selectedProject().techStack}
              />
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
    </section>
  )
}

export default PortfolioSection
