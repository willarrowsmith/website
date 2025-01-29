import { Briefcase, Home, User } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-64 bg-black p-6 flex flex-col">
      <div className="mb-8">
        
      </div>
      <nav className="space-y-4">
        <Link href="/portfolio" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Home />
          <span>Home</span>
        </Link>
        <Link href="portfolio/about" className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <User />
          <span>About Me</span>
        </Link>

        <div className="border-t border-gray-800 my-4"></div>

      </nav>
      <div className="mt-auto text-xs text-gray-400">
        <a href="#" className="hover:underline">
          Cookies
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  )
}
