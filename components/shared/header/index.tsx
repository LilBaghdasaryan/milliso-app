import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './search'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data'

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <div className='p-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1'
            >
              <Image
                width={40}
                height={40}
                src='/icons/logo.png'
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className='hidden md:block flex-1 max-w-xl'>
            <Search />
          </div>
          <Menu />
        </div>
        <div className='md:hidden block py-2'>
          <Search />
        </div>
      </div>
      <div className='flex items-center px-3 mb-[1px] bg-gray-800'>
        <Button
          variant='ghost'
          className='header-button flex items-center gap-1 text-base '
        >
          <MenuIcon />
          All
        </Button>
        <div className='flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]'>
          {data.headerMenus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className='header-button !p2'
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
