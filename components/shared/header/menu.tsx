import { Link } from 'lucide-react'
import React from 'react'

export default function Menu() {
  return (
    <div>
      <nav>
        <Link
          href='/home'
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        >
          Home
        </Link>
        <Link
          href='/about'
          className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        >
          About
        </Link>
      </nav>
    </div>
  )
}
