"use client"

import { Code, PenTool, Server, Database, Smartphone, Globe } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

const skills = [
  { name: "Front-end Development", icon: Code },
  { name: "UI/UX Design", icon: PenTool },
  { name: "Back-end Development", icon: Server },
  { name: "Database Management", icon: Database },
  { name: "Mobile App Development", icon: Smartphone },
  { name: "SEO Optimization", icon: Globe },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300">
                <skill.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

