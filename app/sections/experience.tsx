'use client'
import OnScrollFadeIn from '@/components/motion/OnScrollInViewAnimation'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

const Experience = ({ children }: PropsWithChildren) => {
  return (
    <section className='max-w-xl my-16 flex-col flex gap-16	'>
      <h2 className='text-3xl sm:text-5xl md:text-6xl '>Experience</h2>
      <OnScrollFadeIn>

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
      </OnScrollFadeIn>
      <div className='flex flex-col gap-4'>{children}</div>
    </section>
  )
}

export default Experience
