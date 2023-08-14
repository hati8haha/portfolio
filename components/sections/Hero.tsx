import Image from 'next/image'
import OnScrollInViewAnimation from '../motion/OnScrollInViewAnimation'

const Hero = () => {
  return (
    <section className='flex justify-center items-center w-full flex-col pt-32'>
      <div className='my-32'>
        <p className='text-3xl sm:text-5xl md:text-6xl  animate-fade-right animate-once animate-delay-[500ms]'>
          Hi there! I'm <span className='font-bold'>Haoting Cheng</span>, a{' '}
        </p>
        <p className='text-3xl sm:text-5xl md:text-6xl animate-fade-left animate-once animate-delay-[900ms]'>
          <span className='font-extrabold	text-6xl lg:text-7xl  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent'>
            Frontend Developer
          </span>
          .
        </p>
      </div>

      <div className='flex flex-col gap-4 text-xl leading-8 text-bunker-600 dark:text-bunker-200 max-w-4xl '>
        <p className=' animate-fade animate-once animate-duration-[800ms]  animate-delay-[1500ms]'>
          I'm all for keeping code maintainable, reusable, and top-notch in
          performance. Stick to the best practices and SOLID design principles.{' '}
        </p>
        <p className=' '>
          <span className='animate-fade animate-once animate-duration-[800ms]  animate-delay-[1500ms]'>
            In my career, I've been lucky to work at{' '}
          </span>
          <Image
            src={'/google-logo.svg'}
            width={160}
            height={40}
            alt='google-logo'
            className='inline-flex align-baseline translate-y-4 animate-jump-in animate-once animate-delay-[2000ms]'
          />
          <span className='animate-fade  animate-once animate-duration-[800ms]  animate-delay-[1500ms]'>
            {' '}
            and start-ups, building creativity web apps and contributing to the
            Google Developer community.✨
          </span>
        </p>

        <p className=' animate-fade  animate-once animate-duration-[800ms]  animate-delay-[1500ms]'>
          Currently in Taiwan, I'm keen on exploring opportunities in the UK.
          Let's connect on{' '}
          <a
            href='https://www.linkedin.com/in/haoting-cheng'
            className='text-sky-500'
          >
            LinkedIn
          </a>
          !
        </p>
      </div>
    </section>
  )
}

export default Hero
