import Image from 'next/image'
import ParallaxText from '@/components/ParallaxText'
import Link from 'next/link'
import Experience from './sections/experience'
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-8 xl:p-24'>
      <section>
        <div className='mt-24'>
          <p className='text-3xl sm:text-5xl md:text-6xl  animate-fade-right animate-once animate-delay-[500ms]'>
            Hi, I'm <span className='font-bold'>Haoting Cheng</span>, a{' '}
          </p>
          <p className='text-3xl sm:text-5xl md:text-6xl animate-fade-left animate-once animate-delay-[900ms]'>
            <span className='font-extrabold	text-6xl lg:text-7xl  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent'>
              Frontend Developer
            </span>
            .
          </p>
        </div>
      </section>

      <Experience />

      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
    </main>
  )
}
