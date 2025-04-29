'use client'
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const handleBackUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className='bg-black text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={handleBackUp}
        >
          <ChevronUp className='h-4 w-4 mr-2' />
          Back to top
        </Button>
      </div>
      <div className='p-4'>
        <div className='flex justify-center  gap-3 text-sm'>
          <Link href='/page/conditions-of-use' className='footer-link'>
            Conditions of Use
          </Link>
          <Link href='/page/privacy-policy' className='footer-link'>
            Privacy Notice
          </Link>
          <Link href='/page/help' className='footer-link'>
            Help
          </Link>
        </div>
        <div className='flex justify-center text-sm'>
          <p> © 2000-2024, {APP_NAME}, Inc. or its affiliates</p>
        </div>
        <div className='mt-8 flex justify-center text-sm text-gray-400'>
          123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
        </div>
      </div>
    </footer>
  )
}
