import { Check } from 'lucide-react'
import Link from 'next/link'


export default function ExperienceContent({ experience }) {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-blue-900 to-black p-8 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{experience.title}</h2>
          <Link 
            href="/" 
            className="bg-green-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-green-400 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
            <img 
              src={experience.mainImage || "/placeholder.svg"} 
              alt="Main visual" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
            <img 
              src={experience.secondaryImage || "/placeholder.svg"} 
              alt="Secondary visual" 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">About this Role</h3>
              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Learnings Timeline</h3>
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

          {/* Skills Checklist */}
          <div className="bg-white bg-opacity-10 rounded-lg p-6 h-fit">
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
        </div>
      </div>
    </div>
  )
}