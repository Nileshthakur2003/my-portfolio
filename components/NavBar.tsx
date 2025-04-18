"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Import shadcn Button
import { User, Star, Folder, Mail } from "lucide-react"; // Import icons
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const router = useRouter();

  const navigateTo = (path: string) => {
    setIsMobileMenuOpen(false); // Close menu after navigation
    router.push(path);
  };

  return (
    <header 
    className="w-full bg-white shadow-md sticky top-0 z-10"
    
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1
          className="text-lg font-bold tracking-wide text-gray-800 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => navigateTo("/")}
        >
          [Code@Nilesh]
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/about")}
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/skills")}
          >
            <Star className="w-5 h-5" />
            <span>Skills</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/projects")}
          >
            <Folder className="w-5 h-5" />
            <span>Projects</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/contact")}
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}
        <Button
          variant="ghost"
          className="md:hidden text-gray-600 hover:text-gray-800 transition-transform duration-300 ease-in-out"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md border-t border-gray-200 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4 text-lg"> {/* Increased font size */}
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/about")}
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/skills")}
          >
            <Star className="w-5 h-5" />
            <span>Skills</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/projects")}
          >
            <Folder className="w-5 h-5" />
            <span>Projects</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
            onClick={() => navigateTo("/contact")}
          >
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Button>
        </div>
      </div>
    </header>
  );
}