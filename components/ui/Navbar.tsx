'use client'
import { PropsWithChildren } from 'react'

const Navbar = ({ children }: PropsWithChildren) => {
  return (
    <nav className='w-full flex justify-between'>
      <div></div>
      <div className=' px-4 drop-shadow-md shadow-bunker-100  bg-bunker-200 dark:bg-bunker-900 bg-opacity-60 dark:bg-opacity-60 rounded-full m-4'>
        {children}
      </div>
    </nav>
  )
}

export default Navbar
