'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Experience = () => {
  return (
    <section className='max-w-xl my-16	'>
      <h2 className='text-3xl sm:text-5xl md:text-6xl '>Experience</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
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
      </motion.div>
    </section>
  )
}

export default Experience
