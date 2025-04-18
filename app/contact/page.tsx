"use client";

import Navbar from "@/components/NavBar";
import { Mail, Link, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants for the contact links
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 200,
    },
  }),
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 text-gray-800 flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center px-4 py-10">
        <motion.div
          className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl border-4 border-transparent animate-border-gradient"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
            Let's Connect
          </h2>

          {/* Grid layout for contact items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Mail className="w-8 h-8 mb-2" />,
                label: "Email",
                href: "mailto:nileshthakurbgp@gmail.com",
                bg: "bg-blue-100 hover:bg-blue-200 text-blue-800",
              },
              {
                icon: <Linkedin className="w-8 h-8 mb-2" />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/nnthakur1297/",
                bg: "bg-blue-100 hover:bg-blue-200 text-blue-800",
              },
              {
                icon: <Link className="w-8 h-8 mb-2" />,
                label: "GitHub",
                href: "https://github.com/Nileshthakur2003",
                bg: "bg-gray-100 hover:bg-gray-200 text-gray-800",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-4 rounded-xl ${item.bg}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="font-medium text-sm">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
