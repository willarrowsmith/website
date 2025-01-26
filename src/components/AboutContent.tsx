import Link from "next/link"
import { FileText, Mail } from "lucide-react"

export default function AboutContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 pb-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="bg-white bg-opacity-10 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
            {/* Profile Photo */}
            <div className="space-y-4">
              <div className="aspect-square w-full bg-black/20 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Linkedin-hNhqwzB2yMa4gaKcwN7vKmJFrJ4eI7.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Resume Download */}
              <Link href="/willarrowsmithcv.pdf" download target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <span>Access my full resume (PDF)</span>
              </Link>

              {/* Email Contact */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <span>will.arrowsmith@gmail.com</span>
              </a>
            </div>

            {/* About Text Content */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I am a Product Manager with experience in both early-stage startups and large enterprises. Currently
                pursuing my xxx in Computer Science at the University of Exeter, I combine technical knowledge with
                business acumen to drive product innovation and growth.
              </p>

              <p className="text-gray-300 leading-relaxed">
                With a track record of successful product launches and improvements at companies like Intel and
                PeerPitch, I specialize in using data-driven insights to develop products that truly resonate with users
                while meeting business objectives.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Outside of work, I'm passionate about music production and exploring new technologies. I enjoy
                collaborating with cross-functional teams and believe in creating products that make a positive impact
                on people's lives.
              </p>

              <Link
                href="/"
                className="inline-flex bg-green-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


