import React from 'react'
import { IconType } from 'react-icons'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { FaHome, FaUbuntu } from 'react-icons/fa'
import { LiaInfinitySolid } from 'react-icons/lia'
import { MdWeb } from 'react-icons/md'
import {
  SiAmazonaws,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGooglehome,
  SiHtml5,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiServerless,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
const SkillSection: React.FC = () => {
  const frontEndSkills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Jest', icon: SiJest },
    { name: 'i18next', icon: SiI18Next },
    { name: 'CSS', icon: SiCss3 },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'Styled-components', icon: SiStyledcomponents },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MUI (Material-UI)', icon: SiMui },
    { name: 'RWD (Responsive Web Design)', icon: MdWeb },
    { name: 'Webpack', icon: SiWebpack },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Dart', icon: SiDart }
  ]

  const backEndSkills = [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Restful API', icon: TbApi },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'NoSQL', icon: SiMongodb },
    { name: 'Microservices', icon: AiOutlineCloudServer },
    { name: 'Serverless', icon: SiServerless },
    { name: 'Nginx', icon: SiNginx }
  ]

  const cloudSkills = [
    { name: 'GCP (Google Cloud Platform)', icon: SiGooglecloud },
    { name: 'AWS (Amazon Web Services)', icon: SiAmazonaws },
    { name: 'Linux', icon: FaUbuntu },
    { name: 'Docker', icon: SiDocker },
    {
      name: 'CI/CD',
      icon: LiaInfinitySolid
    },
    { name: 'Git', icon: SiGit }
  ]

  const smartHomeSkills = [
    { name: 'Google Smart Home', icon: SiGooglehome },
    { name: 'Matter', icon: FaHome }
  ]

  return (
    <div className='container mx-auto py-20 '>
      <h1 className='text-4xl font-bold mb-8'>Skills</h1>
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
