"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const companyLogos1 = [
  {
    src: "/assets/home/company-logo/download 1.png",
    w: 180,
  },
  {
    src: "/assets/home/company-logo/image-1.png",
    w: 180,
  },
  {
    src: "/assets/home/company-logo/image-3.png",
    w: 160,
  },
  {
    src: "/assets/home/company-logo/image-4.png",
    w: 150,
  },
  {
    src: "/assets/home/company-logo/Talent_logo-64c3146f73e3d729b2f0a01f1a73e07e04c8c33fa095dd69d6840abf637baccf 1.png",
    w: 250,
  },
];
const companyLogos2 = [
  {
    src: "/assets/home/company-logo/image.png",
    w: 180,
  },
  {
    src: "/assets/home/company-logo/image-2.png",
    w: 150,
  },
  {
    src: "/assets/home/company-logo/image-5.png",
    w: 200,
  },
  {
    src: "/assets/home/company-logo/image-6.png",
    w: 150,
  },
  {
    src: "/assets/home/company-logo/image-7.png",
    w: 170,
  },
];

const JobSearchingPlatform = () => {
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
          Job Searching Platform
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
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {companyLogos1.map((logo, idx) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
            >
              <Image
                width={logo.w}
                height={60}
                src={logo.src}
                alt="Company logo"
                className="h-auto"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {companyLogos2.map((logo, idx) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
            >
              <Image
                width={logo.w}
                height={60}
                src={logo.src}
                alt="Company logo"
                className="h-auto"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobSearchingPlatform;
