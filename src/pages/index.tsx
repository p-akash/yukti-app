export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to <span className="text-indigo-400">Yukti.app</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mb-8">
        Your AI-powered strategy assistant — simple, smart, and beautifully fast.
      </p>
      <a
        href="/login"
        className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
      >
        Get Started
      </a>
    </div>
  )
}
