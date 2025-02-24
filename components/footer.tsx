import { Github, Linkedin, Twitter, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2023 Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

