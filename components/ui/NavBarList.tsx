import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

const NavBarList = () => {
  return (
    <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
      <li className='text-bunker-900 dark:text-white font-mono'>
        <Link href='/'>About</Link>
      </li>
      <li className='text-bunker-900 dark:text-white font-mono'>
        <Link href='/posts'>Blog</Link>
      </li>
      <li className='text-bunker-900 dark:text-white font-mono'>
        <ThemeSwitcher />
      </li>
    </ul>
  )
}

export default NavBarList
