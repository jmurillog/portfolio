"use client";

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: { scale: 1.2, rotate: 5 },
};

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col bg-black text-gray-100"
    >
      <Header />
      <main className="flex-grow pt-16">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent px-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto px-4"
          >
            Whether you want to collaborate, have an idea, or just say hi, feel
            free to reach out. I'd love to hear from you!
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-12 px-4"
          >
            <motion.a
              href="mailto:jmmurillogaliano@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jose-maria-murillo-galiano/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Find Me Online
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="flex justify-center gap-8 sm:gap-6"
          >
            {[
              {
                Icon: Github,
                href: "https://github.com/jmurillog",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/jose-maria-murillo-galiano/",
              },
              {
                Icon: Mail,
                href: "mailto:jmmurillogaliano@gmail.com",
              },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:text-blue-400 transition-colors"
                variants={iconVariants}
                custom={i}
                whileHover="hover"
              >
                <Icon className="w-7 h-7 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <footer className="mt-auto border-t border-gray-800 py-6 sm:py-8 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm sm:text-base text-gray-400">
          © 2024 Jose. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}
