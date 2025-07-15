"use client";
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
  className = "",
}) => {
  return <div className={className}>{children}</div>;
};

export default MotionFadeIn;
