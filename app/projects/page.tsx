"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/NavBar";
import { Github, Eye } from "lucide-react";

const projects = [
  {
    title: "AI Telegram Bot",
    description: "A python project implementing Cohere and Telegram APIs.",
    link: "https://github.com/Nileshthakur2003/ai-bot",
    showcase: "https://yourwebsite.com/project1",
    technologies: ["Python", "Flask", "Cohere", "Telegram Bot"],
  },
  {
    title: "Research Publication Collector",
    description: "A research publication aggregator based on DLPB.",
    link: "https://github.com/Nileshthakur2003/pubs-summary",
    showcase: "https://yourwebsite.com/project2",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Online Auction Platform",
    description: "An Auction Platform to auction items in real-time.",
    link: "https://github.com/Nileshthakur2003/auction-platform-final",
    showcase: "javascript:alert('Its not hosted yet')",
    technologies: ["NodeJs", "React", "Bootstrap", "MongoDB"],
  },
];

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTech, setSelectedTech] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  // Get unique techs for dropdown
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  // Filter logic
  const filteredProjects = projects.filter((project) => {
    const matchesTech =
      selectedTech === "" || project.technologies.includes(selectedTech);
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTech && matchesSearch;
  });

  return (
    <div
      className={`h-screen bg-gradient-to-b from-gray-100 to-blue-100 text-gray-800 flex flex-col transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } `}
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map((tech, index) => (
              <option key={index} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 shadow-md bg-white text-center p-4 animate-slide-up animate-border-gradient"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-24 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-600">
                Placeholder
              </div>

              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>

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
                { project.showcase ?
                (<a
                  href={project.showcase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-xs"
                >
                  <Eye size={14} />
                  Showcase
                </a>):(
                  <></>
                )
                }
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
