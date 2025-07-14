"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectOrganizer = () => {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          How does our Project Organizer work?
        </motion.h2>
        <motion.h5
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Powerful, self-serve team engagement tools and analytics. Supercharge
          your <br className="hidden sm:block" /> managers & keep employees
          engaged from anywhere.
        </motion.h5>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="w-full max-w-3xl">
            <Image
              width={1200}
              height={600}
              src="/assets/home/Video.png"
              alt="Remote team collaboration"
              className="w-full h-auto mt-8 sm:mt-12 rounded-lg shadow-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOrganizer;
