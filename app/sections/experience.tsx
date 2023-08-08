'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef, PropsWithChildren } from 'react'

const Experience = ({children}: PropsWithChildren ) => {
  const ref  = useRef(null)
  const isInView = useInView(ref, {once: true})
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }

  return (
    <section className='max-w-xl my-16	'>

      <h2 className='text-3xl sm:text-5xl md:text-6xl '>Experience</h2>

      {<motion.div
        initial={{opacity: 0}}
        transition={spring}
        animate={{
          opacity: isInView ? 1 :0,
        }}
        
        ref={ref}
      >
        <p className='text-xl leading-8'>
          <span className=''>In my career, I've been lucky to work at </span>
          <Image
            src={'/google-logo.svg'}
            width={200}
            height={40}
            alt='google-logo'
            className='inline align-baseline translate-y-4'
          />
          <span>
            {' '}
            and start-ups, building creativity web apps and contributing to the
            Google Developer community. 😄
          </span>
        </p>
      </motion.div>}
      <div className='flex flex-col gap-4'>
      {children}

      </div>
    </section>
  )
}

export default Experience
