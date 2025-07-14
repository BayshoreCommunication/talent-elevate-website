"use client";
import { motion } from "framer-motion";
import React from "react";

interface MotionFadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const MotionFadeIn: React.FC<MotionFadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
