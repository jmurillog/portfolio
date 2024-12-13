"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const imageVariants = {
  hidden: { scale: 1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.8,
    },
  },
};

export default function Home() {
  const projects = [
    {
      id: "nexnet",
      title: "Nexnet",
      description:
        "A university platform that enhances professional networking using AI to connect students and alumni.",
      tech: ["Next.js", "TypeScript", "Firebase", "OpenAI", "Machine Learning"],
      image: "/nexnet.png",
      link: "https://nexnet.vercel.app/",
    },
    {
      id: "fit",
      title: "FIT",
      description:
        "A running club management mobile app that offers personalized training and community features for runners.",
      tech: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "Cloud Functions",
      ],
      image: "/fit.png",
      link: "https://apps.apple.com/es/app/fit-chile/id6451051749",
    },
    {
      id: "gymba",
      title: "Gymba",
      description:
        "A social app for fitness enthusiasts to share their progress, create challenges, and stay motivated.",
      tech: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Expo",
        "Cloud Functions",
      ],
      image: "/gymba.png",
      link: "https://www.gymba.es/",
    },
    {
      id: "storytwist",
      title: "Storytwist",
      description:
        "An interactive stories app that reached #2 in the App Store's book category. Uses generative AI to create unique narratives.",
      tech: ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo"],
      image: "/storytwist.png",
      link: "https://apps.apple.com/cl/app/storytwist/id6689522572?l=en-GB",
    },
    {
      id: "terracita",
      title: "Terracita",
      description:
        "A dining platform that improves the flow of direct table-to-kitchen ordering through mobile and web.",
      tech: ["Flutter", "Laravel", "MySQL", "Firebase", "REST API"],
      image: "/terracita.png",
      link: "https://apps.apple.com/es/app/terracita/id6503645790",
    },
    {
      id: "ring-saver",
      title: "Ring Saver",
      description:
        "An IoT health tracking solution that connects smart rings with mobile devices for health monitoring.",
      tech: ["React Native", "TypeScript", "Firebase", "BLE", "Expo"],
      image: "/ring-saver.png",
    },
  ] as {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link?: string;
  }[];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />

      <main className="pt-16">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:hidden w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-gray-800 mb-8 overflow-hidden">
              <Image
                src="/yo.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div className="flex-1" variants={containerVariants}>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Mobile & Full Stack Developer
              </motion.h1>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg text-gray-300 mb-6"
              >
                {`I create top-notch mobile apps and build dynamic web applications. My work is powered by TypeScript, Firebase, and AI tools, focusing on delivering practical, user-friendly solutions that companies and people genuinely enjoy using.`
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      variants={wordVariants}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.p>
              <motion.div variants={containerVariants} className="flex gap-6">
                {[
                  { Icon: Github, href: "https://github.com/jmurillog" },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/jose-maria-murillo-galiano/",
                  },
                  { Icon: Mail, href: "mailto:jmmurillogaliano@gmail.com" },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    custom={i}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden md:block w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden hover:cursor-pointer"
              onClick={() => (window.location.href = "/about")}
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image src="/yo.png" alt="Profile" layout="fill" priority />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="projects"
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() =>
                    (window.location.href = "/projects/" + project.id)
                  }
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-square w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority={index < 2}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8"
            >
              Have an exciting mobile or web project in mind? Let's bring it to
              life with cutting-edge technology.
            </motion.p>
            <motion.a
              href="mailto:jmmurillogaliano@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
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
