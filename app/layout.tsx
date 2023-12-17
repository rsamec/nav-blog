import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackgroundWithMask } from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lodě na řece',
  description: 'Půjčovna lodí',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='bg-watter-blue-0 dark:bg-watter-blue-2'>
          {/* <BackgroundWithMask></BackgroundWithMask> */}
          <div className='dark:text-white'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
