"use client";

import { GraduationCap, FileText, Award, Italic } from "lucide-react"; // Import icons from lucide-react
import Navbar from "@/components/NavBar"; // Import Navbar component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Bihar Engineering University",
    duration: "2023 - 2027",
    courses:["DSA", "C++", "OOPS"]
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
      <Navbar />

      <section className="container mx-auto py-4 px-4 flex-grow">
        {/* Resume Button */}
        <div className="flex justify-center mb-4">
          <Link href="/resume.pdf" target="_blank">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center">
              <FileText className="mr-2" />
              Resume
            </Button>
          </Link>
        </div>

        {/* Side-by-Side Layout for About Me and Education */}
        <div className="grid grid-cols-2 gap-4">
          {/* About Me Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up flex items-center">
              <GraduationCap className="mr-2" />
              About Me
            </h3>
          <Card className="border border-gray-200 shadow-sm animate-slide-up">
            
            <CardContent>
              <p className="text-gray-700 text-lg text-justify">
                I am a passionate software developer with expertise in building
                scalable web applications. With a knack for problem-solving, I
                enjoy crafting solutions that make a meaningful impact.
                Currently, I am focused on leveraging cutting-edge technologies
                to develop innovative projects.
              </p>
            </CardContent>
          </Card>
          </div>

          {/* Education Section */}
          <div >
            <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up flex items-center">
              <GraduationCap className="mr-2" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 shadow-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {edu.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-lg">
                      <strong>Institution:</strong> {edu.institution}
                    </p>
                    <p className="text-gray-600 text-lg">
                      <strong>Duration:</strong> {edu.duration}
                    </p>
                    <p className="text-gray-600 text-lg">
                     <strong> Courses :</strong>
                    {edu.courses.map((subject,index)=>(
                      <i> {subject},</i>
                    ))}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up flex items-center">
            <Award className="mr-2" />
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
                  <CardTitle className="text-sm font-semibold flex items-center">
                    <Award className="mr-1" />
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