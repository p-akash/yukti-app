import Link from 'next/link'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Header from './Header'

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Header/>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-zinc-800">
        © {new Date().getFullYear()} Yukti.app. Built with Next.js + Firebase.
      </footer>
    </div>
  )
}
