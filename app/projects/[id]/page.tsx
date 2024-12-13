"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

const projects = [
  {
    id: "nexnet",
    title: "Nexnet",
    description:
      "Nexnet is a cutting-edge university platform designed to bridge the gap between students and alumni, fostering meaningful professional connections. By leveraging advanced AI algorithms and machine learning, Nexnet empowers users to discover and connect with relevant peers and professionals within their academic ecosystem. It aims to create a vibrant network where opportunities flourish.",
    role: "Lead Developer",
    responsibilities: [
      "Architected and developed the entire platform using Next.js and TypeScript.",
      "Integrated Firebase for real-time database and user authentication using universities SSO.",
      "Utilized OpenAI for implementing personalized recommendation algorithms.",
      "Collaborated with university stakeholders to ensure platform alignment with academic and professional needs.",
    ],
    achievements: [
      "Successfully presented Nexnet at IE Ventures Day, receiving positive feedback from investors and peers.",
      "Designed and implemented scalable features to handle growing user traffic.",
    ],
    tech: ["Next.js", "TypeScript", "Firebase", "OpenAI", "Machine Learning"],
    image: "/nexnet.png",
    link: "https://nexnet.vercel.app/",
  },
  {
    id: "fit",
    title: "FIT",
    description:
      "FIT is a mobile application tailored for running clubs, offering personalized training plans, event management, and a community hub for runners. The app fosters collaboration between coaches and members while providing data-driven insights to improve performance.",
    role: "Sole Developer",
    responsibilities: [
      "Developed the mobile app using React Native and Expo.",
      "Integrated Firebase for user data synchronization and cloud functions.",
      "Implemented an interactive calendar feature for scheduling runs and events.",
    ],
    achievements: [
      "Launched the app on both Android and iOS, serving over 200 daily active users.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "Expo", "Cloud Functions"],
    image: "/fit.png",
    link: "https://apps.apple.com/es/app/fit-chile/id6451051749",
  },
  {
    id: "gymba",
    title: "Gymba",
    description:
      "Gymba is a social fitness app designed for gym enthusiasts to compete, share workouts, track progress, and connect with like-minded individuals. It combines elements of social networking and fitness tracking to create a unique user experience.",
    role: "Co-Founder and Developer",
    responsibilities: [
      "Designed and developed the app using React Native and Firebase.",
      "Integrated social features, including challenges, leaderboards, and profile customization.",
      "Coordinated with designers and marketers to define user personas and improve user retention.",
    ],
    achievements: [
      "Received glowing reviews for its intuitive UI and engaging social features.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "Expo", "Cloud Functions"],
    image: "/gymba.png",
    link: "https://www.gymba.es/",
  },
  {
    id: "storytwist",
    title: "Storytwist",
    description:
      "Storytwist is an app that revolutionizes storytelling with AI-generated interactive narratives. Users can shape the storyline by making choices, creating a personalized and engaging reading experience. It’s designed for book lovers and casual readers alike.",
    role: "Lead Developer",
    responsibilities: [
      "Built the mobile app using React Native and Firebase for seamless cross-platform compatibility.",
      "Integrated OpenAI to generate adaptive narratives based on user input.",
      "Implemented analytics to track user preferences and improve engagement.",
    ],
    achievements: [
      "Achieved the #2 spot in the App Store's book category.",
      "Generated over 1,000 unique storylines within the first quarter.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "OpenAI", "Expo"],
    image: "/storytwist.png",
    link: "https://apps.apple.com/cl/app/storytwist/id6689522572?l=en-GB",
  },
  {
    id: "terracita",
    title: "Terracita",
    description:
      "Terracita is a dining platform designed to streamline the table-to-kitchen experience. It simplifies order management for restaurants while enhancing customer convenience through intuitive mobile and web interfaces.",
    role: "Backend Developer",
    responsibilities: [
      "Developed RESTful APIs using Laravel for seamless integration between mobile and web platforms.",
      "Built the webapp and mobile app for both iOS and Android.",
    ],
    achievements: ["Enhanced order accuracy and reduced wait times by 25%."],
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "REST API"],
    image: "/terracita.png",
    link: "https://apps.apple.com/es/app/terracita/id6503645790",
  },
  {
    id: "ring-saver",
    title: "Ring Saver",
    description:
      "Ring Saver is a university project that explored the potential of Bluetooth technology for health monitoring. The app connected a smart ring to a mobile device via Bluetooth and displayed real-time health metrics on an intuitive dashboard. The project aimed to provide a seamless user experience for health data tracking, even though it was never officially launched.",
    role: "Sole Developer",
    responsibilities: [
      "Developed the mobile application using React Native and Firebase.",
      "Implemented Bluetooth Low Energy (BLE) connectivity to pair and retrieve data from the smart ring.",
      "Designed and developed a real-time dashboard to visualize health metrics, such as heart rate and activity levels.",
      "Processed raw data received from the ring and converted it into actionable insights for users.",
      "Collaborated with university advisors to refine features and ensure the project met academic goals.",
    ],
    achievements: [
      "Successfully implemented BLE connectivity to transfer data between the smart ring and the app.",
      "Designed a functional and user-friendly health monitoring dashboard prototype.",
      "Presented the project at a university showcase, receiving positive feedback from faculty and peers.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "BLE", "Expo"],
    image: "/ring-saver.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
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

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const techChipVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: { scale: 1.05, y: -2 },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-300"
        >
          Project not found.
        </motion.h1>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col bg-black text-gray-100">
        <Header />
        <main className="flex-grow pt-16">
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                variants={imageVariants}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="rounded-2xl"
                  priority
                />
              </motion.div>

              <div>
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
                >
                  {project.title}
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-300 mb-6"
                >
                  {project.description}
                </motion.p>

                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-semibold mb-2">My Role</h2>
                  <p className="text-gray-300 mb-6">{project.role}</p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-semibold mb-2">
                    Responsibilities
                  </h2>
                  <ul className="list-disc pl-5 text-gray-300 mb-6">
                    {project.responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        className="mb-2"
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-semibold mb-2">Achievements</h2>
                  <ul className="list-disc pl-5 text-gray-300 mb-6">
                    {project.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        className="mb-2"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-xl font-semibold mb-2">Technologies</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <motion.span
                        key={index}
                        variants={techChipVariants}
                        custom={index}
                        whileHover="hover"
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg"
                    whileHover={{
                      scale: 1.05,
                      backgroundImage:
                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  >
                    Visit Project
                  </motion.a>
                )}
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="border-t border-gray-800 py-8 backdrop-blur-sm bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            © 2024 Jose. All rights reserved.
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
}
