// src/pages/signup.tsx
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { useAuth } from '@/context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function SignUpPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [dob, setDob] = useState('')
  const [agree, setAgree] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [ref, setRef] = useState('')

  useEffect(() => {
    if (!authLoading && user) router.push('/dashboard')
  }, [user, authLoading, router])

  // Capture referral from URL
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const referral = query.get('ref')
    if (referral) setRef(referral)
  }, [])

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!agree) return toast.error('Please agree to the Terms & Conditions.')
    if (!firstName || !lastName || !email || !password || !phone || !city || !country || !dob) {
      return setError('All fields are required.')
    }

    setLoading(true)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'users', res.user.uid), {
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email,
        phone,
        city,
        country,
        dob,
        referral: ref || null,
        subscription: 'free',
        createdAt: serverTimestamp(),
      })

      await sendEmailVerification(res.user)
      toast.success('Account created! Please check your email to verify.')

      setTimeout(() => router.push('/verify-email'), 2500)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Toaster />
      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Create Your Yukti Account</h2>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mb-4"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-1/2 px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-1/2 px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />
          </div>

          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />

          <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />

          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />

          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />

          <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700" />

          <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-gray-300" />

          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="mt-1 accent-indigo-500" required />
            I agree to the{' '}
            <a href="/terms" target="_blank" className="text-indigo-400 underline">Terms & Conditions</a>{' '}and{' '}
            <a href="/privacy" target="_blank" className="text-indigo-400 underline">Privacy Policy</a>
          </label>

          <button type="submit" disabled={loading} className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium py-2 rounded-md">
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-400 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  )
}