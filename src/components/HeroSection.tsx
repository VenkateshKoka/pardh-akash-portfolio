"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Badge } from "@/components/ui/badge";

// Animation variants for staggering children (skills)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Slightly faster stagger for badges
      delayChildren: 0.5, // Start after hero text animation
    },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const HeroSection: React.FC = () => {
  const skillCategories = Object.keys(resumeData.skills);

  return (
    <motion.section
      className="w-full py-20 md:py-28 lg:py-32 xl:py-40" // Slightly reduced padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-8 text-center 
                     bg-black/15 dark:bg-white/5 backdrop-blur-xl 
                     rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl border border-white/10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          {/* Intro Text */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {resumeData.intro}
            </h1>
            <p className="mx-auto max-w-[750px] text-gray-200 md:text-xl lg:text-lg">
              {resumeData.aboutMe}
            </p>
          </div>

          {/* Separator */}
          <motion.hr
            className="w-2/3 border-t border-white/20 my-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "66.66%", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          />

          {/* Skills Section Integrated */}
          <motion.div
            className="w-full max-w-4xl space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Key Skills
            </h2>
            {skillCategories.map((category) => (
              <motion.div
                key={category}
                className="space-y-3"
                variants={itemVariants} // Apply item variant for stagger
              >
                <h3 className="text-lg font-medium text-gray-300 text-left">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {resumeData.skills[category].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm bg-purple-600/70 hover:bg-purple-500/80 text-white border-none px-3 py-1 cursor-default"
                      tabIndex={0} // Accessibility
                      aria-label={`Skill: ${skill}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
