"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/NavBar";
import { Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your awesome project.",
    link: "https://github.com/yourprofile/project1",
    showcase: "https://yourwebsite.com/project1",
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 2",
    description: "Another amazing project you're proud of.",
    link: "https://github.com/yourprofile/project2",
    showcase: "https://yourwebsite.com/project2",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Project 3",
    description: "An innovative project showcasing your skills.",
    link: "https://github.com/yourprofile/project3",
    showcase: "https://yourwebsite.com/project3",
    technologies: ["Python", "Flask"],
  },
];

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200); // Delay the animation for smoothness
  }, []);

  return (
    <div
      className={`h-screen bg-gradient-to-b from-gray-100 to-blue-100 text-gray-800 flex flex-col transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />

      <section className="container mx-auto py-4 px-6 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800 animate-slide-up">
          My Projects
        </h2>

        {/* Search Bar and Filter Dropdown */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={""}
            onChange={() => {}}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          <select
            value=""
            onChange={() => {}}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="">All Technologies</option>
            {/* Insert technology options dynamically */}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 shadow-md bg-white text-center p-4 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`, // Stagger the animation for each card
              }}
            >
              {/* Placeholder for Image */}
              <div className="w-full h-24 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-600">
                Placeholder
              </div>

              {/* Project Info */}
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 justify-center mb-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 text-xs"
                >
                  <Github size={14} />
                  GitHub
                </a>
                <a
                  href={project.showcase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-xs"
                >
                  <Eye size={14} />
                  Showcase
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}