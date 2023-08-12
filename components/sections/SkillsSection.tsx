import React from 'react'
import { IconType } from 'react-icons'
import { backEndSkills, cloudSkills, frontEndSkills, smartHomeSkills } from './data'

const SkillSection: React.FC = () => {


  return (
    <div className='container mx-auto py-20 '>
      <h1 className='text-4xl font-bold mb-8 text-bunker-600 dark:text-bunker-300'>Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8'>
        <SkillList title='Front-end Development' skills={frontEndSkills} />
        <SkillList title='Back-end Development' skills={backEndSkills} />
        <SkillList title='Cloud and Infrastructure' skills={cloudSkills} />
        <SkillList title='Smart Home and IoT' skills={smartHomeSkills} />
      </div>
    </div>
  )
}

interface SkillProps {
  name: string
  icon: IconType
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  const IconComponent = icon
  return (
    <div className='flex gap-1 items-center text-xs sm:text-sm lg:text-md text-gray-700 dark:text-bunker-200'>
      <IconComponent />
      <p>{name}</p>
    </div>
  )
}

interface SkillListProps {
  title: string
  skills: SkillProps[]
}

const SkillList: React.FC<SkillListProps> = ({ title, skills }) => {
  return (
    <div className='sm:justify-self-center'>
      <h2 className='text-lg font-semibold mb-4'>{title}</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  )
}

export default SkillSection
