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
  {
    title: "React Developer Certification",
    platform: "Coursera",
  },
  {
    title: "Full-Stack Web Development",
    platform: "Udemy",
  },
  {
    title: "Data Structures and Algorithms",
    platform: "CodeChef",
  },
  {
    title: "Docker and Kubernetes Essentials",
    platform: "Pluralsight",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

        {/* Professional Introduction */}
        <Card className="mb-8 border border-gray-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Professional Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg text-justify">
              I am a passionate and skilled software developer with expertise in building scalable web applications and intuitive user interfaces. With a strong foundation in programming and a knack for problem-solving, I love crafting solutions that make a meaningful impact. Currently, I am focused on leveraging cutting-edge technologies to develop efficient and innovative projects.
            </p>
          </CardContent>
        </Card>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{edu.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    <strong>Institution:</strong> {edu.institution}
                  </p>
                  <p className="text-gray-600">
                    <strong>Duration:</strong> {edu.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications and Courses Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Certifications & Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
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