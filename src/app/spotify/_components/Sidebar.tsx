import { Heart, Home, Library, PlusSquare, Search } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-black p-6 flex flex-col">
      <div className="mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spotify.jpg-QEbS0OZkfj39g8nooEKquN9dETG6IT.jpeg"
          alt="Spotify"
          className="h-16 w-auto" />
      </div>
      <nav className="space-y-4">
        <Link
          href="/spotify"
          className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Home />
          <span>Home</span>
        </Link>
        <Link
          href="/spotify"
          className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Search />
          <span>Search</span>
        </Link>
        <Link
          href="/spotify"
          className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Library />
          <span>Your Library</span>
        </Link>
      </nav>
      <div className="mt-8 space-y-4">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <PlusSquare />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <Heart />
          <span>Liked Songs</span>
        </button>
      </div>
      <div className="mt-auto text-xs text-gray-400">
        <a href="#" className="hover:underline">Cookies</a>
        <span className="mx-2">|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </div>
  );
}

