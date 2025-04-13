import Navbar from "@/components/NavBar"; // Import NavBar component
import { User, Folder } from "lucide-react"; // Import icons

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar /> {/* Replaces the inline navigation bar */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold mt-6">Hi, I'm Nilesh</h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          A passionate [Your Role] who loves crafting amazing digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-6 space-y-4 sm:space-y-0">
          {/* Contact Me Button */}
          <a
            href="#contact"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <User className="w-5 h-5" />
            <span>Contact Me</span>
          </a>

          {/* My Projects Button */}
          <a
            href="#projects"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            <Folder className="w-5 h-5" />
            <span>My Projects</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Feel free to connect with me via email or social media platforms.
          </p>
          <a
            href="mailto:yourname@example.com"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <User className="w-5 h-5" />
            <span>Email Me</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">© 2023 Nilesh. All Rights Reserved.</p>
      </footer>
    </div>
  );
}