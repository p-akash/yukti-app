'use client'
import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useAuth } from '@/context/AuthContext'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useAuth()

  return (
    <header className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-indigo-400">
          Yukti
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink href="/">Home</NavLink>
          {!user && (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/signup">Sign Up</NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink href="/dashboard">Dashboard</NavLink>
              <button
                onClick={() => signOut(auth)}
                className="hover:text-indigo-400 transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Hamburger for Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden backdrop-blur-lg bg-zinc-900/90 px-6 py-4 space-y-4 border-t border-zinc-800"
          >
            <NavLink href="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            {!user && (
              <>
                <NavLink href="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
                <NavLink href="/signup" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
              </>
            )}
            {user && (
              <>
                <NavLink href="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>
                <button
                  onClick={() => {
                    signOut(auth)
                    setMenuOpen(false)
                  }}
                  className="block text-left w-full hover:text-indigo-400 transition"
                >
                  Logout
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

// 🔹 Reusable NavLink Component with Glow Hover
function NavLink({ href, children, onClick }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-indigo-400 hover:underline underline-offset-4 transition duration-200"
    >
      {children}
    </Link>
  )
}
