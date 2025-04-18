"use client";

import Navbar from "@/components/NavBar"; // Import NavBar component
import { User, Folder, FileText } from "lucide-react"; // Import icons
import { motion } from "framer-motion";



export default function Portfolio() {


  

  
  return (
    <div className="relative h-screen text-gray-800 flex flex-col font-sans overflow-hidden animated-bg">
      {/* Continuous Gradient Background */}
     

      {/* Navigation Bar */}
      <Navbar />

      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 relative z-10">
        <motion.h1 
        className="text-3xl sm:text-4xl font-bold text-black mt-6"
        animate={{ y:0 , scale:1 }}
        initial={{ y:-30 , scale:1.5 }}
        >
          Hi, I am Nilesh
        </motion.h1>
        <motion.p className="text-lg sm:text-xl text-black mt-4"
        animate={{ y:0 , scale:1 }}
        initial={{ y:'-100vh' , scale:1.5 }}
        transition={{ delay:1  }}
        >
          A Software Developer who loves crafting amazing digital experiences.
        </motion.p>
        <div 
        className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-20 space-y-4 sm:space-y-0"
        
        >
          {/* Contact Me Button */}
          <motion.div 
          whileHover={{ scale:1.5}}
          >
          <motion.a
            href="/contact"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            animate={{   scale:1  , x:0 }}
            initial={{ scale:1.5 , x:'-100vw' }}
            transition={{ delay:1.5 }}
           
          >
            <User className="w-5 h-5" />
            <span>Contact Me</span>
          </motion.a>
          </motion.div>

          {/* My Projects Button */}
          <motion.div 
          whileHover={{ scale:1.5}}
          >
          <motion.a
         
            href="/projects"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            animate={{   scale:1  , y:0 }}
            initial={{ scale:1.5 , y:'-100vh' }}
            transition={{ delay:2  }}
          >
            <Folder className="w-5 h-5" />
            <span>My Projects</span>
          </motion.a>
          </motion.div>

          {/* Resume Button */}
          <motion.div 
          whileHover={{ scale:1.5}}
          >
          <motion.a
            href="/resume.pdf"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            animate={{   scale:1  , x:0 }}
            initial={{ scale:1.5 , x:'100vw' }}
            transition={{ delay:2.5 }}
          >
            <FileText className="w-5 h-5" />
            <span>My Resume</span>
          </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer
      <footer className="bg-gray-200 py-4 text-center relative z-10">
        <p className="text-sm text-gray-600">© 2023 Nilesh. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
}