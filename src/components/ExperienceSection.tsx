"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData, type WorkExperience } from "@/data/resumeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Animation variant for cards
const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const ExperienceCard: React.FC<{ experience: WorkExperience }> = ({
  experience,
}) => {
  return (
    <Card
      className="mb-6 break-inside-avoid 
                 bg-white/5 backdrop-blur-md 
                 border border-white/10 shadow-md 
                 text-gray-200"
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">
          {experience.role}
        </CardTitle>
        <CardDescription className="text-base text-gray-300">
          {experience.company} | {experience.duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ExperienceSection: React.FC = () => {
  if (!resumeData.workExperience || resumeData.workExperience.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="w-full py-16 md:py-20 lg:py-24 bg-black/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 mx-auto max-w-7xl mb-16 md:mb-20 lg:mb-24"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter text-center mb-10 md:mb-14 text-white"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {resumeData.workExperience.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
