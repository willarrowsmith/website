import type { Experience } from "@/app/portfolio/_components/ExperienceContent";

export const experiences: Record<string, Experience> = {
  peerpitch: {
    title: "Co-Founder, Product Manager",
    company: "Ever had a project or idea but needed some help on a particular skillset and didn't know where to find it ? PeerPitch is here to bridge that gap. Think of it as a dating app but for skill-sharing and collaboration, connecting students with complementary talents to turn ideas into reality.",
    description: `
    
    <ul>
  <li>Conceptualised and designed PeerPitch, a cross-disciplinary collaboration platform connecting students akin to a "dating app" for skills.</li>
  <li>Secured funding, delivering a compelling product pitch to a panel of start-up investors and university senior leadership.</li>
  <li>Collaborated closely with co-founder software engineer to build the MVP, now in beta testing on TestFlight.</li>
  <li>Established strategic partnerships with Exeter University's Digital team and leaders of key student societies to accelerate platform growth.</li>
  <li>Spearheaded the onboarding process for early users, optimizing feedback loops to refine and evolve the quality of our product pre-launch.</li>
</ul>
    `,
    timeline: [
      {
        date: "June 2024",
        learning: "Conceptualised PeerPitch"
      },
      {
        date: "Aug 2024",
        learning: "Found a co-founder. Began building the idea and getting user feedback"
      },
      {
        date: "Nov 2024",
        learning: "Finished building the MVP"
      },
      {
        date: "Dec 2024",
        learning: "Began beta testing with a group of Exeter University students"
      },
      {
        date: "Jan 2025",
        learning: "Successfully secured funding from SETSquared"
      }
    ],
    skills: [
      "Product Strategy",
      "Product Management",
      "User Research",
      "Agile Development",
      "UX Design",
      "Product Analytics",
    ],
    mainImage: "/pear.jpg",
    secondaryImage: "/set.jpg"
  },
  myexeter: {
    title: "Product Manager & UX Researcher (MyExeter App)",
    company: "MyExeter, the University of Exeter's latest app launched in September 2024, is designed to streamline and enhance the student experience. It connects directly with timetables and university systems, making it easy for students to manage administrative tasks, view their schedules, and stay up-to-date with campus events, all in one convenient platform.",
    description: 
    `
    
    <ul>
  <li>Collaborated with cross-functional teams (software engineering, marketing) to continuously refine product features and messaging in response to student feedback, driving engagement up by 30%.</li>
  <li>Conducted user research with 200+ students leveraging both qualitative and quantitative insights to refine app features and optimise the user experience.</li>
  <li>Provided input on the design and implementation of new features such as a geolocation digital check-in for lectures and an AI powered feedback feature. </li>
  <li>Aided the onboarding of over 20,000 students in the first two months, working with technical teams to streamline account setup and contributing to promotion strategies such as launch events, QR code posters and pop-up demonstrations.</li>
  <li>Diagnosed and resolved technical issues related to digital tools and infrastructure ensuring minimal disruption to users. </li>
</ul>
    `,
    timeline: [
      {
        date: "Aug 2024",
        learning: "Worked with technical teams, designers and product managers to finalise MyExeter"
      },
      {
        date: "Sept 2024",
        learning: "Launched MyExeter"
      },
      {
        date: "Oct 2024",
        learning: "Launched geolocation feature to facilitate digital lecture check in"
      },
      {
        date: "Nov 2024",
        learning: "App reached 20,000 downloads"
      },
      {
        date: "Dec 2024",
        learning: "Worked with technical team to iterate the UX, increasing engagement by 30%"
      }
    ],
    skills: [
      "UX Research",
      "Data Analysis",
      "Product Management",
      "User Testing",
      "Interface Design",
      "Accessibility"
    ],
    mainImage: "/myexeter.jpg",
    secondaryImage: "/arrows.jpg"
  },
  intel: {
    title: "Product Designer (Pricing Tools)",
    company: "I completed a 13-month placement at Intel within the Data Centre and AI team, where I initially served as a pricing manager and business analyst, overseeing pricing requests for Intel's Xeon data centre chips. Midway through my internship, I took on additional responsibilities as a product manager, managing the set of tools and systems used by EMEA pricing managers, driving efficiency and alignment in pricing operations.",
    description: 
    `
    <ul>
  <li>Developed a PowerBI-based pricing tool providing real-time, product-specific insights, enhancing pricing decisions and resulting in 455 hours/year saved within my team. The tool was adopted across my team and rolled out globally to our US counterparts.</li>
  <li>Collaborated with technical teams and pricing managers to implement tool enhancements, improving the accuracy and efficiency of pricing decisions and reducing pricing response time by 30%.  </li>
  <li>Trained AI pricing algorithms improving AI pricing recommendations from 69% to 84% accuracy within 6 months.</li>
  <li>Researched AI Data Centre transformation comprehending content and synthesising into a clear and communicable business report, graded 78%.</li>
  <li>Led Intel’s presence at the Festival of Tomorrow, organising 15 virtual sessions to an outreach of 400+ students and managing a team of 9 volunteers.</li>
</ul>
    `,
    timeline: [
      {
        date: "June 2023",
        learning: "Began my internship at Intel"
      },
      {
        date: "September 2023",
        learning: "Recognised the need for and developed a new pricing tool. "
      },
      {
        date: "November 2023",
        learning: "Introduced the tool to my team who were keen to adopt. Continually iterated based on feedback"
      },
      {
        date: "December 2023",
        learning: "Took on the responsibility of managing the collective set of tools and systems used by EMEA pricing managers"
      },
      {
        date: "January-April 2024",
        learning: "Worked with technical teams to deliver 10 key feature enhancements across the 5 systems"
      },
      {
        date: "April 2024",
        learning: "My pricing tool was adopted by our US counterparts. The tool saved my team alone an estimated 455hrs/year"
      },
      {
        date: "July 2024",
        learning: "Finsihed my internship at Intel"
      }
    ],
    skills: [
      "Process Optimisation",
      "Data Analysis",
      "Product Design",
      "Leadership",
      "Feature Prioritisation",
    ],
    mainImage: "/dash.jpg",
    secondaryImage: "/intelgroup.jpg"
  },
  depop: {
    title: "Managed Personal E-commerce Store",
    company: "Managed a personal e-commerce store, buying and selling second hand branded clothing for profit. My stock was sourced from peer-to-pee e-commerce platforms and second hand clothing shops",
    description: 
    `
    <ul>
  <li>Made £7000 profit over a period of 2-3 years.</li>
  <li>Developed an ability to negotiate and an understanding of consumer behaviour, market dynamics, pricing and risk. </li>
  <li>Enhanced data analysis skills, using Excel and Power BI to track sales and target profitable brands/products. </li>
  <li>Managed order fulfillment and customer service, selling over 350 items and maintaining an 100% positive seller rating.</li>
</ul>
    `,
    timeline: [
      {
        date: "Jan 2021",
        learning: "Began seeking out items to sell"
      },
      {
        date: "Feb 2022",
        learning: "Reached 100 sales"
      },
      {
        date: "November 2022",
        learning: "Reached 200 sales"
      },
      {
        date: "July 2023",
        learning: "Reached 300 Sales"
      }
    ],
    skills: [
      "E-commerce Management",
      "Customer Service",
      "Business Acumen",
      "Digital Marketing",
      "Product Staging",
      "Inventory Management"
    ],
    mainImage: "/depop1.jpg",
    secondaryImage: "/parcel.jpg"
  },
  bright: {
    title: "Courses (Coding and Analytics)",
    company: "I have completed a number of courses in coding, analytics and prompt engineering to elevate my skillset and personal development.",
    description: `
    <ul>
  <li>Completed a 5 week Couch to Coder course learning the basics of HTML, CSS JavaScript and React code.</li>
  <li>Completed Intel's 24 hour long business analytics course involving coursework and a final project.</li>
  <li>Completed Intel's AI Prompt Engineering course, gaining valuable skills in leveraging Generative AI to enhance efficiency and effectiveness at work.</li>
  <li>Completed 5 Linkedin learning courses during my internship to improve my Excel and PowerBI skills.</li>
</ul>
    `,
    timeline: [
      {
        date: "Sep 2023",
        learning: "Completed 3 Linkedin Excel and PowerBI courses"
      },
      {
        date: "Apr 2024",
        learning: "Completed Intels Business Analytics Certification"
      },
      {
        date: "May 2024",
        learning: "Intel AI Prompt Engineering Qualification"
      },
      {
        date: "Aug 2024",
        learning: "Completed 5 week long Couch to Coder course"
      }
    ],
    skills: [
      "Data Analytics",
      "Coding",
      "Prompt Engineering",
      "Microsoft Tools",
    ],
    mainImage: "/coding.jpg",
    secondaryImage: "/lecture.jpg"
  },
  jumpstart: {
    title: "Jumpstart Cohort Member",
    company: "Selected as one of the top ~1% of 3000+ applicants to join Jumpstart's 2025 cohort. Jumpstart is a highly selective platform that connects top-tier talent with high-growth startups.",
    description: `
    <ul>
  <li>Attended 40+ "startup spotlights", meeting founders from the UK's most exciting VC backed startups.</li>
  <li>Received coaching around how start-ups operate along with professional development</li>
  <li>Took part in Jumpstart networking events, meeting talented students from different universities across the UK.</li>
</ul>
    `,
    timeline: [
      {
        date: "Nov 2024",
        learning: "Selected to join Jumpstart"
      },
      {
        date: "Dec 2024",
        learning: "Engaged with upskilling workshops around start-up skillsets"
      },
      {
        date: "Jul 2022",
        learning: "Attended start-up spotlights meeting founders from some of the UK's most exciting start-ups"
      }
    ],
    skills: [
      "Entrepreneuship",
      "Networking",
      "Start-up Insight",
      "Commercial Awareness"
    ],
    mainImage: "/jumpstart.jpg",
    secondaryImage: "/jump.jpg"
  }
} as const;