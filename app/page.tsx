import Image from 'next/image'
import LinkBlock from '@/components/LinkBlock'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 xl:p-24">
      <div>
        <p className='text-3xl xl:text-7xl font-extrabold animate-fade-right animate-once animate-delay-[500ms]'>
          Hi, I'm Haoting Cheng,
        </p>
        <p className='text-3xl xl:text-7xl font-extrabold animate-fade-left animate-once animate-delay-[900ms]'>
        a Frontend Developer.

        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <LinkBlock heading='Learn' desc='If you like hamster' />
        <Link href={'/posts'}
        >
          <LinkBlock heading='Posts' desc='If you like hamster' />
        </Link>
        <LinkBlock heading='eat' desc='If you like hamster' />
        <LinkBlock heading='have fun ' desc='If you like hamster' />
      </div>
    </main>
  )
}
