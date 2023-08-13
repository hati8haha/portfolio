import OnScrollInViewAnimation from '@/components/motion/OnScrollInViewAnimation'
import Hero from '@/components/sections/Hero'
import Experience from '../components/sections/Experience'
import ExperienceCard from '../components/sections/ExperienceCard'
import PortfolioSection from '@/components/sections/PortfolioSection'
import SkillSection from '@/components/sections/SkillsSection'
import CommunitySection from '@/components/sections/CommunitySection'

import { jobsData } from '@/components/sections/data'
export default function Home() {
  return (
    <main className='flex flex-col dark:bg-opacity-10 items-center justify-between p-8 xl:p-24 dark:bg-bunker-950 bg-bunker-100 bg-opacity-20 backdrop-blur-lg relative'>
      <Hero />
      <PortfolioSection />
      <CommunitySection />
      <Experience>
        {jobsData.map((job, i) => (
          <OnScrollInViewAnimation
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ExperienceCard key={i} {...job} />
          </OnScrollInViewAnimation>
        ))}
      </Experience>
      <SkillSection />

    </main>
  )
}
