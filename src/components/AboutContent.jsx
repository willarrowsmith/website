import Link from 'next/link'

export default function AboutContent() {
  return (
    (<div
      className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 pb-24">
      <h2 className="text-3xl font-bold mb-6">About Will Arrowsmith</h2>
      <div className="bg-white bg-opacity-10 rounded-md p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">My Skills and Experiences</h3>
        <p className="text-gray-300 mb-4">
          Here you can add detailed information about your skills, experiences, and why you'd be a great fit for Spotify.
        </p>
        <Link
          href="/"
          className="bg-green-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-200">
          Back to Home
        </Link>
      </div>
    </div>)
  );
}

