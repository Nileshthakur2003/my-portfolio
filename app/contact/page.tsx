import Navbar from "@/components/NavBar"; // Import Navbar component
import { Mail, Link, Linkedin } from "lucide-react"; // Import icons

export default function Contact() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-4">
        <div className="w-full max-w-xl bg-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
            Let's Connect
          </h2>

          {/* Direct Contact Options */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:yourname@example.com"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition"
            >
              <Link className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
          <hr className="border-t border-gray-300 mb-4" />

          {/* Introduction Message */}
          <p className="text-center text-sm text-gray-600 mb-4">
            I'd love to hear from you! Send me a quick message below.
          </p>

          {/* Contact Form */}
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:scale-105 transition transform text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}