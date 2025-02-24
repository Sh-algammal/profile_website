"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">Your Name</h1>
            <p className="text-xl mb-6">Web Developer & Designer</p>
            <motion.a
              href="#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

