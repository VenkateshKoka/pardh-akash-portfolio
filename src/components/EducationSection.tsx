"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EducationSection: React.FC = () => {
  const { institution, degree, duration, gpa } = resumeData.education;

  if (!institution) {
    return null; // Don't render if no institution data
  }

  return (
    <section
      id="education"
      className="w-full py-16 md:py-20 lg:py-24 bg-black/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-lg border border-white/10 mx-auto max-w-4xl mb-16 md:mb-20 lg:mb-24"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter text-center mb-10 md:mb-14 text-white"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="bg-white/5 backdrop-blur-md 
                       border border-white/10 shadow-md 
                       text-gray-200"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white">
                {degree}
              </CardTitle>
              <CardDescription className="text-base text-gray-300">
                {institution} | {duration}
              </CardDescription>
            </CardHeader>
            {gpa && (
              <CardContent>
                <p className="text-gray-300">GPA: {gpa}</p>
              </CardContent>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
