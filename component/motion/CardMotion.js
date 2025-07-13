'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CardMotion = ({ children, initial, whileInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={mainControls}
      variants={{ visible: whileInView }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotion;
