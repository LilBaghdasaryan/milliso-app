import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-col flex-1'>{children}</main>
      <Footer />
    </div>
  )
}
