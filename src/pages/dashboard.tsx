import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import Link from 'next/link'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login')
    }
  }, [user, loading, router])
  
  if (loading || !user) {
    return <div className="text-center py-20">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-1">Hey, {user?.email}</h1>
          <p className="text-gray-400">Welcome to your Yukti dashboard</p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tool: Landing Page Generator */}
          <Link href="/tools/landing-generator">
            <div className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800 transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
                📝 Landing Page Generator
              </h2>
              <p className="text-gray-400 text-sm">
                Instantly generate headlines, subtext, and CTAs for any product.
              </p>
            </div>
          </Link>

          {/* Tool: Ad Copy Generator (Coming Soon) */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 opacity-50 cursor-not-allowed">
            <h2 className="text-xl font-semibold mb-2">📢 Ad Copy Generator</h2>
            <p className="text-gray-400 text-sm">Coming soon...</p>
          </div>

          {/* Tool: Competitor Analyzer (Coming Soon) */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 opacity-50 cursor-not-allowed">
            <h2 className="text-xl font-semibold mb-2">🧠 Competitor Analyzer</h2>
            <p className="text-gray-400 text-sm">Coming soon...</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => signOut(auth)}
            className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
