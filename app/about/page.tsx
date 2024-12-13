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
                I'm Jose, a passionate Mobile and Full Stack Developer with a
                knack for creating seamless, user-centric apps and web
                experiences. I specialize in React Native, Flutter, and Next.js
                and enjoy solving complex problems with simple, intuitive
                solutions.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                Over the years, I've worked on a diverse range of projects,
                including apps for Sony, running clubs, and personal ventures
                focused on fitness, storytelling, and professional networking. I
                leverage cutting-edge technologies like AI, Firebase, and
                TypeScript to build reliable and scalable solutions.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 mb-6 leading-relaxed"
              >
                When I'm not coding, you'll probably find me running with a
                local club, experimenting with new ideas, or learning something
                new. I'm always up for a challenge and love working on projects
                that make an impact.
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
