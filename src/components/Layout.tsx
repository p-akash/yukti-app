import Link from 'next/link'
import { ReactNode } from 'react'
import { useAuth } from '@/context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Yukti.app
          </Link>

          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            {!user && (
  <>
    <Link href="/login" className="hover:underline">Login</Link>
    <Link href="/signup" className="hover:underline">Sign Up</Link>
  </>
)}
            {user && <Link href="/dashboard" className="hover:underline">Dashboard</Link>}
            {user && (
              <button
                onClick={() => signOut(auth)}
                className="hover:underline underline-offset-4"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-zinc-800">
        © {new Date().getFullYear()} Yukti.app. Built with Next.js + Firebase.
      </footer>
    </div>
  )
}
