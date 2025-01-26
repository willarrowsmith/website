import { PlayIcon } from 'lucide-react';
import Link from 'next/link';

const featuredPlaylist: {
  id: number
  name: string
  description: string
  imageUrl: string
} = {
  id: 0,
  name: "Hey Spotify Recruitment!",
  description: "I would love to be part of the band! Here is my demo tape of skills and experiences.",
  imageUrl: "/will.jpg"
} as const;

const playlists: {
  id: number
  name: string
  description: string
  imageUrl: string
  href: string
}[] = [
  {
    id: 1,
    name: "Co-Founder, Product Manager",
    description: "PeerPitch",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PeerPitch-ntlm5UeqVfSKzy7lprEUp2La41pr9o.png",
    href: "/peerpitch"
  },
  {
    id: 2,
    name: "Product Manager & UX Researcher",
    description: "MyExeter",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Exeter.jpg-I1POZ9XrjHpxC3juzWiTSUxhKtryKr.jpeg",
    href: "/myexeter"
  },
  {
    id: 3,
    name: "Product Manager (Pricing Tools)",
    description: "Intel",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intel.jpg-EajCfst7cSVAnnSjbIooUdcqiHcj3y.jpeg",
    href: "/intel"
  },
  {
    id: 4,
    name: "Managed Personal E-commerce Store",
    description: "Depop",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depop.jpg-8p2nVUSgucIdVoXuxrQX7lGGVb8EH0.jpeg",
    href: "/depop"
  },
  { 
    id: 5, 
    name: "Coding", 
    description: "Bright Network",
    imageUrl: "/bright.jpg",
    href: "/depop"
  },
  { 
    id: 6, 
    name: "Music", 
    description: "",
    imageUrl: "/bright.jpg",
    href: "/music"
  },
  
]

export default function MainContent() {
  return (
    <div
      className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 pb-24">
      <h2 className="text-3xl font-bold mb-6">Will Arrowsmith</h2>
      {/* Featured Playlist */}
      <div className="mb-8">
        <div
          className="bg-white bg-opacity-10 group rounded-md overflow-hidden flex items-center hover:bg-opacity-20 transition-all duration-200">
          <img
            src={featuredPlaylist.imageUrl}
            alt={featuredPlaylist.name}
            className="w-64 h-64 object-cover object-top" />
          <div className="p-6 flex-1">
            <h3 className="text-2xl font-bold mb-2">{featuredPlaylist.name}</h3>
            <p className="text-gray-300 mb-4">{featuredPlaylist.description}</p>
            <Link
              href="/about"
              className="bg-green-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-200">
              About me
            </Link>
          </div>
        </div>
      </div>
      {/* Relevant Experience Grid */}
      <h3 className="text-xl font-bold mb-4">Relevant Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-white bg-opacity-10 group rounded-md overflow-hidden flex flex-col hover:bg-opacity-20 transition-all duration-200">
            <Link href={playlist.href} className="contents">
              <div className="aspect-square w-full bg-black">
                <img
                  src={playlist.imageUrl}
                  alt={playlist.name}
                  className="aspect-square w-full h-full object-cover" />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold">{playlist.name}</h3>
                  {playlist.description && (
                    <p className="text-sm text-gray-400">{playlist.description}</p>
                  )}
                </div>
                <div
                  className="mt-2 opacity-0 group-hover:opacity-100 self-end bg-green-500 rounded-full p-3 shadow-lg transition-all duration-200">
                  <PlayIcon fill="black" size={24} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

