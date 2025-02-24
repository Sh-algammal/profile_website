"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedSection from "./animated-section"

const project = {
  title: "Featured Project",
  description:
    "This is a showcase of my best work. It demonstrates my skills in front-end development, back-end integration, and user experience design.",
  image: "/placeholder.svg?height=400&width=600",
  link: "#",
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">My Project</h2>
        </AnimatedSection>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-lg shadow-md overflow-hidden max-w-2xl w-full"
          >
            <div className="relative h-64 md:h-80">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects

