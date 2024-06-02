import Navbar from '@/components/ui/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from './theme-provider'
import NavBarList from '@/components/ui/NavBarList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haoting Cheng',
  description: 'Welcome to my portfolio!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          'min-h-screen  dark:bg-bunker-950 bg-bunker-100'
        }
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar>
            <NavBarList />
          </Navbar>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
