import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Profile</h1>
        <p className="text-xl mb-8">Thank you for visiting. I'm excited to share my work with you!</p>
        <Link
          href="/profile"
          className="bg-white text-purple-700 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition duration-300"
        >
          Enter Site
        </Link>
      </div>
    </div>
  )
}

