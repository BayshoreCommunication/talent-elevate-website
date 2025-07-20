"use client";

import { Spinner } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import HomeTabOption from "../shared/ui/HomeTabOption";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-top bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/assets/home/homegradientbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay (optional) */}
      <div className="absolute inset-0 bg-black/0 z-0"></div>

      {/* Content container */}
      <div className="relative z-10">
        <motion.div
          className="px-4 sm:px-8 py-3 container mx-auto mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mt-12 sm:mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            High-performing remote teams.
            <br /> The future of work.
          </motion.h1>
          <motion.h5
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-secondary mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your <br className="hidden sm:block" />
            managers & keep employees engaged from anywhere.
          </motion.h5>

          <motion.div
            className="flex justify-center mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <Link
              href="/sign-up"
              className="bg-[#241836] text-white px-8 sm:px-14 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
            >
              Explore Now
            </Link>
          </motion.div>

          <motion.h5
            className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Trusted by 4,000+ companies
          </motion.h5>
        </motion.div>

        <motion.div
          className="flex items-center justify-center mt-8 sm:mt-12 px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <HomeTabOption />
        </motion.div>

        <motion.div
          className="container mx-auto mt-8 sm:mt-14 px-4 sm:px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="relative w-full aspect-video max-w-6xl mx-auto">
            <Image
              fill
              src="/assets/home/tab-option-image.png"
              alt="Remote team collaboration"
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="container mx-auto mt-8 sm:mt-16 px-4 sm:px-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-base md:text-xl font-medium"> Rating 4.7</h3>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map((star) => (
                <motion.span
                  key={star}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * star, duration: 0.4 }}
                >
                  <FaStar className="text-amber-500 size-4 md:size-5" />
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <FaRegStarHalfStroke className="text-amber-500 size-5" />
              </motion.span>
            </div>
            <h3 className="text-base md:text-xl font-medium text-gray-500">
              {" "}
              Based on 300+ reviews
            </h3>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[
              "/assets/home/rating-logo_1 1.png",
              "/assets/home/rating-logo_2 1.png",
              "/assets/home/rating-logo_3 1.png",
              "/assets/home/rating-logo_4 1.png",
            ].map((src, idx) => (
              <motion.div
                key={src}
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
              >
                <Image
                  width={idx === 1 ? 160 : idx === 3 ? 200 : 45}
                  height={50}
                  src={src}
                  alt="Remote team collaboration"
                  className="h-auto"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
