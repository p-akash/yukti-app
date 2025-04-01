import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 px-6 py-10 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Yukti</h3>
          <p className="text-sm">
            AI-powered strategy tools built for solopreneurs, freelancers & creators.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/tools/landing-generator" className="hover:text-indigo-400 transition">Tools</a></li>
            <li><a href="/pricing" className="hover:text-indigo-400 transition">Pricing</a></li>
            <li><a href="/blog" className="hover:text-indigo-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-white font-semibold mb-3">Subscribe</h4>
          <p className="text-sm mb-2">Get updates & AI tips straight to your inbox.</p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-zinc-800 text-white px-3 py-2 rounded-md text-sm w-full border border-zinc-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-md text-sm"
            >
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-zinc-800 pt-6 text-center text-sm text-gray-500">
        Made with ❤️ by <span className="text-white font-medium">Akash</span> &nbsp;|&nbsp;
        &copy; {new Date().getFullYear()} Yukti. All rights reserved.
      </div>
    </footer>
  )
}
