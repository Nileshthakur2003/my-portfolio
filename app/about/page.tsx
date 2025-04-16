"use client";

import { GraduationCap, FileText, Award } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Bihar Engineering University",
    duration: "2023 - 2027",
    courses: ["DSA", "C++", "OOPS"],
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
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      <Navbar />

      <section className="container mx-auto py-6 px-4 flex-grow">
        {/* Resume Button */}
        <div className="flex justify-center mb-6">
          <Link href="/resume.pdf" target="_blank">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center">
              <FileText className="mr-2" />
              Resume
            </Button>
          </Link>
        </div>

        {/* About & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Me Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up flex items-center">
              <GraduationCap className="mr-2" />
              About Me
            </h3>
            <Card className="border border-gray-200 shadow-sm animate-slide-up">
              <CardContent className="pt-4">
                <p className="text-gray-700 text-base text-justify">
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
          <div>
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
                    <p className="text-gray-600 text-base">
                      <strong>Institution:</strong> {edu.institution}
                    </p>
                    <p className="text-gray-600 text-base">
                      <strong>Duration:</strong> {edu.duration}
                    </p>
                    <p className="text-gray-600 text-base">
                      <strong>Courses:</strong>{" "}
                      {edu.courses.map((subject, i) => (
                        <i key={i}>{subject}{i !== edu.courses.length - 1 ? ", " : ""}</i>
                      ))}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2 animate-slide-up flex items-center">
            <Award className="mr-2" />
            Certifications & Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <p className="text-gray-600 text-sm">
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
