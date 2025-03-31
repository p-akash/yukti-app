import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain,
  Zap,
  ShieldCheck,
  User,
  Wrench,
  Lightbulb
} from 'lucide-react' // optional: install lucide-react or replace with emoji/icons


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white px-6 py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            Build bold ideas with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Yukti
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-gray-400 text-lg md:text-xl mb-8"
          >
            Strategy tools for solo founders & creatives — powered by AI and built for real-world hustle.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="/signup"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium px-6 py-3 rounded-full transition hover:brightness-110"
            >
              Get Started
            </a>
            <a
              href="/tools/landing-generator"
              className="border border-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-full transition"
            >
              Try a Demo
            </a>
          </motion.div>
        </div>

        {/* Subtle animated glow background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full blur-3xl z-0"
        ></motion.div>
      </section>


      {/* Features Preview */}
      <section className="px-6 py-16 border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">What Yukti Can Do</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="h-6 w-6 text-indigo-400" />,
                title: 'AI-Powered Tools',
                desc: 'Generate landing pages, ad copy, startup ideas, and more with smart templates.',
              },
              {
                icon: <Zap className="h-6 w-6 text-indigo-400" />,
                title: 'Fast & Lightweight',
                desc: 'Blazing fast UI with zero bloat. Yukti works instantly, even on mobile.',
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
                title: 'Privacy-First',
                desc: 'Your prompts and generations are yours — no tracking, no data selling.',
              },
              {
                icon: <User className="h-6 w-6 text-indigo-400" />,
                title: 'Built for Freelancers',
                desc: 'Tailored for solo creators, coaches, and small biz — not corporate bloatware.',
              },
              {
                icon: <Wrench className="h-6 w-6 text-indigo-400" />,
                title: 'Easy to Use',
                desc: 'Clean UI, guided prompts, and zero learning curve — start in seconds.',
              },
              {
                icon: <Lightbulb className="h-6 w-6 text-indigo-400" />,
                title: 'Idea to Action',
                desc: 'Turn vague thoughts into real assets — landing pages, ads, and copy in 1 click.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-md hover:-translate-y-1 hover:border-indigo-400 transition duration-300"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Footer Section */}
      <section className="relative px-6 py-20 text-center bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build smarter with <span className="text-indigo-400">Yukti</span>?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join the creators already using AI to write, plan, and launch faster — without friction.
          </p>
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 rounded-full text-white font-medium hover:brightness-110 transition"
          >
            Create Your Free Account
          </a>
        </div>

        {/* Soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-500 opacity-10 rounded-full blur-3xl z-0"></div>
      </section>
    </div>
  )
}
