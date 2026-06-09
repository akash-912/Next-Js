import Link from 'next/link'
import React, { ReactNode } from 'react'
import "./globals.css"

const BaseLayout = ({children}:{children: ReactNode}) => {
  return (
    <html>
      <body>
        <div className='min-h-screen flex flex-col text-black'>
          {/* header */}
          <header className='bg-purple-800 text-white p-4'>
            <nav>
              <ul className='flex space-x-4'>
                <li>
                  <Link href='/' className='hover:text-purple-400'>Home</Link>
                </li>
                <li>
                  <Link href='/about' className='hover:text-purple-400'>About</Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:text-purple-400'>Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* main */}
          <div className='flex flex-1'>
            {/* sidebar */}
            <aside className='w-64 bg-purple-200 p-4'>
              <ul>
                <li>
                  <Link href="/category/technology" className='block py-2 hover:bg-purple-300'>Technology</Link>
                </li>
                <li>
                  <Link href="/category/technology" className='block py-2 hover:bg-purple-300'>Design</Link>
                </li>
                <li>
                  <Link href="/category/technology" className='block py-2 hover:bg-purple-300'>Business</Link>
                </li>
              </ul>
            </aside>
            {/* main content */}
            <main className='flex-1 p-6 bg-white'>
              {children}
            </main>
          </div>
          {/* Footer */}
          <footer className="bg-purple-800 text-white text-center p-4 ">
            <p>&copy; 2026 Akash WebDev</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

export default BaseLayout