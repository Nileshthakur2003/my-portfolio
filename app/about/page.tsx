"use client";

import { GraduationCap, FileText, Award } from "lucide-react";
import Navbar from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

// Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const education = [
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "Bihar Engineering University",
    duration: "2023 - 2027",
    courses: ["DSA", "C++", "OOPS"],
  },
];

const certifications = [
  { title: "Data Analytics", platform: "HP" },
  { title: "Advanced CPP", platform: "Spoken Tutorial (IIT B)" },
  { title: "C Language", platform: "Spoken Tutorial (IIT B)" },
  { title: "Python", platform: "Kaggle" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      <Navbar />

      <section className="container mx-auto py-6 px-4 flex-grow">
        {/* Resume Button */}
        <div className="flex justify-center mb-6">
          <Link href="/resume.pdf" target="_blank">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center">
                <FileText className="mr-2" />
                Resume
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* About & Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Me */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <GraduationCap className="mr-2" />
              About Me
            </h3>
            <Card className="border border-gray-200 shadow-sm">
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
          </motion.div>

          {/* Education */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <GraduationCap className="mr-2" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={index + 2}
                >
                  <Card className="border border-gray-200 shadow-sm">
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
                          <i key={i}>
                            {subject}
                            {i !== edu.courses.length - 1 ? ", " : ""}
                          </i>
                        ))}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
            <Award className="mr-2" />
            Certifications & Courses
          </h3>

          {/* Scrollable Row */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-60 h-60"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 6}
              >
                <Card className="h-full flex flex-col justify-between border border-gray-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold flex items-center">
                      <Award className="mr-1" />
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mb-4">
                    <p className="text-gray-600 text-sm">
                      <strong>Platform:</strong> {cert.platform}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
