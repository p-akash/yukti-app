import Link from 'next/link'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header/>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
