"use client";

import Navbar from "@/components/NavBar"; // Import your Navbar component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", logoClass: "devicon-lightbulb-plain" },
      { name: "Team Collaboration", logoClass: "devicon-people-plain" },
      { name: "Effective Communication", logoClass: "devicon-communication-plain" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-gray-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  {skill.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex flex-col items-center text-center"
                    >
                      <i
                        className={`${item.logoClass} text-5xl mb-2`}
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
    </div>
  );
}