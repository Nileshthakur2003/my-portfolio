import Navbar from "@/components/NavBar"; // Import Navbar component
import { Mail, Link, Linkedin } from "lucide-react"; // Import icons

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl border-4 border-transparent animate-border-gradient">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
            Let's Connect
          </h2>

          {/* Grid layout for contact items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {/* Email */}
            <a
              href="mailto:nileshthakurbgp@gmail.com"
              className="flex flex-col items-center p-4 bg-blue-100 hover:bg-blue-200 rounded-xl transition-transform hover:scale-105 text-blue-800"
            >
              <Mail className="w-8 h-8 mb-2" />
              <span className="font-medium text-sm">Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nnthakur1297/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-blue-100 hover:bg-blue-200 rounded-xl transition-transform hover:scale-105 text-blue-800"
            >
              <Linkedin className="w-8 h-8 mb-2" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Nileshthakur2003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-transform hover:scale-105 text-gray-800"
            >
              <Link className="w-8 h-8 mb-2" />
              <span className="font-medium text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}