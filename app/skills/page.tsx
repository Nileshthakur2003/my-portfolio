"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar"; // Import your Navbar component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "devicon";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", logoClass: "devicon-javascript-plain colored" },
      { name: "Python", logoClass: "devicon-python-plain colored" },
      { name: "TypeScript", logoClass: "devicon-typescript-plain colored" },
      { name: "C++", logoClass: "devicon-cplusplus-plain colored" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", logoClass: "devicon-react-original colored" },
      { name: "Next.js", logoClass: "devicon-nextjs-original-wordmark" },
      { name: "Node.js", logoClass: "devicon-nodejs-plain colored" },
      { name: "Express", logoClass: "devicon-express-original" },
      { name: "Flask", logoClass: "devicon-flask-original" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", logoClass: "devicon-git-plain colored" },
      { name: "Docker", logoClass: "devicon-docker-plain colored" },
      { name: "Firebase", logoClass: "devicon-firebase-plain colored" },
      { name: "PostgreSQL", logoClass: "devicon-postgresql-plain colored" },
    ],
  },
  // {
  //   category: "Soft Skills",
  //   items: [
  //     { name: "Problem Solving", logoClass: "devicon-lightbulb-plain" },
  //     { name: "Team Collaboration", logoClass: "devicon-people-plain" },
  //     { name: "Effective Communication", logoClass: "devicon-communication-plain" },
  //   ],
  // },
];

function GitHubStats() {
  return (
    <section className="container mx-auto py-16 px-6 bg-gray-200 mt-12 rounded-lg shadow-lg animate-slide-up">
      <h2 className="text-3xl font-bold text-center mb-6">GitHub Stats</h2>
      <div className="flex flex-col items-center gap-6">
        {/* Top Languages */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nileshthakur2003&theme=dark&show_icons=true&hide_border=true&layout=compact"
          alt="Top Languages"
          className="rounded-md shadow-md"
        />
        {/* Overall GitHub Stats */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=Nileshthakur2003&theme=dark&show_icons=true&hide_border=true&count_private=true"
          alt="Overall GitHub Stats"
          className="rounded-md shadow-md"
        />
        {/* Contribution Streak */}
        <img
          src="https://streak-stats.demolab.com?user=Nileshthakur2003&theme=dark&hide_border=true"
          alt="GitHub Streak"
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200); // Delay to trigger the animation

    const interval = setInterval(() => {
      // Get all skill icons
      const icons = document.querySelectorAll(".skills-icon");
      if (icons.length > 0) {
        // Pick a random icon
        const randomIndex = Math.floor(Math.random() * icons.length);
        const randomIcon = icons[randomIndex];

        // Add 'shake' class
        randomIcon.classList.add("shake");

        // Remove 'shake' class after 1 second
        setTimeout(() => {
          randomIcon.classList.remove("shake");
        }, 1000);
      }
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200); // Delay to trigger the animation
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 flex flex-col transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      {/* Navbar Component */}
      <Navbar />

      {/* Skills Section */}
      <section className="container mx-auto py-16 px-6 animate-slide-up">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border-4 shadow-md transition-transform transform hover:scale-105 ">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col items-center text-center">
                      <i
                        className={`${item.logoClass} text-5xl mb-2 skills-icon`}
                        title={item.name}
                      ></i>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <GitHubStats />
    </div>
  );
}