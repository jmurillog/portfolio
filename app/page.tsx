"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // height of navbar
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Nexnet",
      description:
        "Revolutionizing professional networking through AI-powered connections. Built with advanced LLMs and machine learning algorithms to create meaningful professional relationships.",
      tech: ["Next.js", "TypeScript", "Firebase", "OpenAI", "TensorFlow"],
      image: "/nexnet.png",
      link: "https://nexnet.vercel.app/",
    },
    {
      title: "FIT",
      description:
        "Comprehensive running club management platform enabling personalized training spaces and community building for runners.",
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
      title: "Gymba",
      description:
        "Social platform for fitness enthusiasts to share progress, create challenges, and maintain motivation through community engagement.",
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
      title: "Storytwist",
      description:
        "Award-winning interactive stories app, reaching #2 in App Store's book category. Leverages generative AI to create unique, engaging narrative experiences.",
      tech: ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo"],
      image: "/storytwist.png",
      link: "https://apps.apple.com/cl/app/storytwist/id6689522572?l=en-GB",
    },
    {
      title: "Terracita",
      description:
        "Revolutionary dining experience platform enabling direct table-to-kitchen ordering through mobile and web applications.",
      tech: ["Flutter", "Laravel", "MySQL", "Firebase", "REST API"],
      image: "/terracita.png",
      link: "https://apps.apple.com/es/app/terracita/id6503645790",
    },
    {
      title: "Ring Saver",
      description:
        "IoT health tracking solution connecting smart rings with mobile devices for comprehensive health monitoring and analysis.",
      tech: ["React Native", "TypeScript", "Firebase", "BLE", "Expo"],
      image: "/ring-saver.png",
    },
  ] as {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link?: string;
  }[];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Jose Murillo
          </span>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </button>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="flex flex-col items-center gap-4 py-4">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:hidden w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg backdrop-blur-sm border border-gray-800 mb-8">
              {/* Profile image for mobile */}
              {/* Add your Image component here when you have the profile image */}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mobile & Full Stack Developer
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Specialized in crafting exceptional mobile experiences with
                React Native and Flutter, alongside robust web applications
                using Next.js. Leveraging TypeScript, Firebase, and AI
                technologies to build innovative solutions that users love.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/jmurillog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jose-maria-murillo-galiano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:jmmurillogaliano@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="hidden md:block w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden">
              {/* Profile image for desktop */}
              {/* Add your Image component here when you have the profile image */}
              <Image src="/yo.png" alt="Profile" layout="fill" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() =>
                    project.link && window.open(project.link, "_blank")
                  }
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 md:hover:scale-105 cursor-pointer"
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
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Have an exciting mobile or web project in mind? Let's bring it to
              life with cutting-edge technology.
            </p>
            <a
              href="mailto:jmmurillogaliano@gmail.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-8 backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          © 2024 Jose. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
