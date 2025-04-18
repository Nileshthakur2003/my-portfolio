"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import "devicon";
import { motion } from "framer-motion";

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const iconHover = { scale: 1.5, transition: { type: "spring", stiffness: 300 } };

// Skill categories
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
];

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);

    const interval = setInterval(() => {
      const icons = document.querySelectorAll(".skills-icon");
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      if (randomIcon) {
        randomIcon.classList.add("shake");
        setTimeout(() => randomIcon.classList.remove("shake"), 1000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gray-50 text-gray-800 flex flex-col transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />

      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div variants={cardVariant} key={index}>
              <Card className="border-4 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {skill.items.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center text-center"
                        whileHover={iconHover}
                      >
                        <i
                          className={`${item.logoClass} text-5xl mb-2 skills-icon`}
                          title={item.name}
                        ></i>
                        <span className="text-sm font-medium">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
