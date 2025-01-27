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
                  src="/vic2.jpg"
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
              My name is Will Arrowsmith, and I’m a final-year Business Economics student at the University of Exeter. I’m a creative and proactive problem solver with a talent for crafting innovative, user-friendly solutions. I’m passionate about developing accessible products that make a meaningful impact.
              </p>

              <p className="text-gray-300 leading-relaxed">
              My internship at Intel introduced me to product management, where I managed digital tools for the pricing team. Since, I’ve helped Exeter University launch and improve their student app, "MyExeter", and created "PeerPitch", an app similar to a dating app but for skill-sharing and collaboration among students. 
              </p>

              <p className="text-gray-300 leading-relaxed">
              Outside of work, my interests include music, fitness, and cooking. I love challenging myself to learn new things. Recently, I’ve started producing music to further explore my love for the piano and have taken on the challenge of learning how to make sushi. I stay active through running, regular gym sessions, and playing Padel—a new favourite with me and my housemates !
              </p>

              <Link
                href="/palantir"
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


