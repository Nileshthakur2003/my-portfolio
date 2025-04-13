"use client";

import { useState } from "react";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import { Github, Eye } from "lucide-react"; // Import icons from lucide-react

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your awesome project.",
    image: "/project1.jpg",
    link: "https://github.com/yourprofile/project1",
    showcase: "https://yourwebsite.com/project1", // Showcase URL
    technologies: ["React", "Next.js"],
  },
  {
    title: "Project 2",
    description: "Another amazing project you're proud of.",
    image: "/project2.jpg",
    link: "https://github.com/yourprofile/project2",
    showcase: "https://yourwebsite.com/project2", // Showcase URL
    technologies: ["JavaScript", "Node.js"],
  },
  {
    title: "Project 3",
    description: "An innovative project showcasing your skills.",
    image: "/project3.jpg",
    link: "https://github.com/yourprofile/project3",
    showcase: "https://yourwebsite.com/project3", // Showcase URL
    technologies: ["Python", "Flask"],
  },
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (e: { target: { value: string; }; }) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = projects.filter((project) =>
      (project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)) &&
      (selectedTechnology === "" ||
        project.technologies.includes(selectedTechnology))
    );
    setFilteredProjects(filtered);
  };

  const handleFilter = (e: { target: { value: any; }; }) => {
    const technology = e.target.value;
    setSelectedTechnology(technology);

    const filtered = projects.filter((project) =>
      (project.title.toLowerCase().includes(searchQuery) ||
        project.description.toLowerCase().includes(searchQuery)) &&
      (technology === "" || project.technologies.includes(technology))
    );
    setFilteredProjects(filtered);
  };

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <Navbar />

      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {/* Search Bar and Filter Dropdown */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={selectedTechnology}
            onChange={handleFilter}
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map((tech, index) => (
              <option key={index} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 shadow-md overflow-hidden bg-white"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies as Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    <Github size={18} />
                    GitHub Link
                  </a>
                  <a
                    href={project.showcase}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    <Eye size={18} />
                    Showcase
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}