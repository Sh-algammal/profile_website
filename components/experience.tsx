"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./animated-section"

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "Jan 2020 - Present",
    description:
      "Lead developer for multiple high-profile web applications. Implemented modern front-end technologies and improved overall performance.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "Mar 2017 - Dec 2019",
    description:
      "Developed and maintained various web applications. Collaborated with cross-functional teams to deliver projects on time.",
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "Jun 2015 - Feb 2017",
    description:
      "Assisted in the development of responsive websites. Gained experience in modern web technologies and best practices.",
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
              className="mb-8"
            >
              <div className="border-l-4 border-blue-500 pl-4 bg-white rounded-lg p-4 transition-all duration-300">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

