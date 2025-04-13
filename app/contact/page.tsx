import Navbar from "@/components/NavBar"; // Import Navbar component
import { Mail, Globe, Link } from "lucide-react"; // Import icons

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Navbar */}
      <Navbar />


      {/* Contact Section */}
      <section className="flex flex-col items-center justify-center py-16 px-8">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
           {/* Direct Contact Options */}
              <div className="mt-8 flex justify-center space-x-6 mb-5">
            <a
              href="mailto:yourname@example.com"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://yourwebsite.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition"
            >
              <Globe className="w-5 h-5" />
              <span>Website</span>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition"
            >
              <Link className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          <hr></hr>
          <p className="text-center text-lg text-gray-600 mb-8">
            Feel free to send me a message below
          </p>

          {/* Contact Form */}
          <form
            className="flex flex-col space-y-4"
        
          >
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

         
        </div>
      </section>
    </div>
  );
}