"use client";

import Navbar from "@/components/NavBar"; // Import your Navbar component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Bihar Engineering University",
    duration: "2023 - 2027",
  },
];

const certifications = [
  { title: "React Developer Certification", platform: "Coursera" },
  { title: "Full-Stack Web Development", platform: "Udemy" },
  { title: "Data Structures and Algorithms", platform: "CodeChef" },
  { title: "Docker and Kubernetes Essentials", platform: "Pluralsight" },
];

export default function About() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      <section className="container mx-auto py-4 px-4 flex-grow">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4 animate-slide-up">
          About Me
        </h2>

        {/* Professional Introduction */}
        <Card className="mb-4 border border-gray-200 shadow-sm animate-slide-up">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Professional Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm text-justify">
              I am a passionate software developer with expertise in building
              scalable web applications. With a knack for problem-solving, I
              enjoy crafting solutions that make a meaningful impact. Currently,
              I am focused on leveraging cutting-edge technologies to develop
              innovative projects.
            </p>
          </CardContent>
        </Card>

        {/* Education Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-md font-semibold">
                    {edu.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    <strong>Institution:</strong> {edu.institution}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Duration:</strong> {edu.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications and Courses Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up">
            Certifications & Courses
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-xs">
                    <strong>Platform:</strong> {cert.platform}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}