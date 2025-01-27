import { Check } from "lucide-react"
import Link from "next/link"

export interface Experience {
  title: string
  company: string
  description: string
  timeline: {
    date: string
    learning: string
  }[]
  skills: string[]
  mainImage: string
  secondaryImage: string
}

interface ExperienceContentProps {
  experience: Experience
}

export default function ExperienceContent({ experience }: ExperienceContentProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{experience.title}</h2>
          <Link
            href="/bendingspoons"
            className="bg-green-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Photo 1 */}
            <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden w-full">
              <img
                src={experience.mainImage || "/placeholder.svg"}
                alt="Main visual"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* Skills Section */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Skills Applied</h3>
              <ul className="space-y-3">
                {experience.skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo 2 */}
            <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden w-full">
              <img
                src={experience.secondaryImage || "/placeholder.svg"}
                alt="Secondary visual"
                className="w-full aspect-[16/8] object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{experience.company}</p>
            </div>

            {/* Key Achievements */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: experience.description ?? "",
                }}
              />
            </div>

            {/* Timeline */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Timeline</h3>
              <div className="space-y-4">
                {experience.timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <div className="flex-1 bg-white bg-opacity-5 rounded-md p-4">
                      <p className="text-gray-200">{item.learning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
