"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">
      <Header />
      <main className="flex-grow pt-16">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="md:w-1/3"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src="/yo.png"
                    alt="Profile"
                    layout="fill"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
            <motion.div className="flex-1" variants={containerVariants}>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                I'm Jose, a Mobile and Full Stack Developer with experience in
                building production-level applications. I've worked with both
                startups and established companies like Sony Pictures,
                implementing features and maintaining codebases across multiple
                platforms.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                My technical stack includes React Native for mobile development,
                React/Next.js for web applications, and Node.js for backend
                services. I work extensively with TypeScript and have experience
                with cloud services like Firebase and AWS. I've implemented
                CI/CD pipelines, written unit tests, and contributed to
                improving application performance and code quality.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                Outside of work, I contribute to open-source projects and stay
                current with software development best practices and emerging
                technologies. I enjoy problem-solving and working in
                collaborative team environments.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-gray-800 py-8 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          © 2024 Jose. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
