"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const tabItems = [
  { title: "Order History", slug: "orderHistory" },
  { title: "Customer Details", slug: "customerDetails" },
  { title: "Seller Details", slug: "sellerDetails" },
  { title: "Dispute", slug: "dispute" },
  { title: "Payment Method", slug: "stripePaymentMethod" },
];

type Props = {
  orderDetails?: any;
};

const HomeTabOption = ({ orderDetails }: Props) => {
  const [selected, setSelected] = useState("orderHistory");

  const handleTabChange = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="flex flex-col gap-6 mt-8 w-full">
      {/* Tab Buttons */}
      <div className="relative flex flex-wrap gap-2 w-full max-w-4xl">
        {tabItems.map((tab) => (
          <button
            key={tab.slug}
            onClick={() => handleTabChange(tab.slug)}
            className={clsx(
              "relative px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200",
              selected === tab.slug
                ? "bg-white text-gray-900 shadow-md"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            )}
          >
            <span className="text-black ">{tab.title}</span>
            {selected === tab.slug && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gray-200 rounded text-white z-10"
                initial={false}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div
        className="w-full max-w-4xl min-h-[350px] bg-white rounded-b-lg rounded-tr-lg shadow-md p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={selected}
      >
        {selected === "orderHistory" && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Order history content
          </motion.div>
        )}
        {selected === "customerDetails" && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Customer details content
          </motion.div>
        )}
        {selected === "sellerDetails" && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Seller details content
          </motion.div>
        )}
        {selected === "dispute" && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Dispute content
          </motion.div>
        )}
        {selected === "stripePaymentMethod" && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Payment method content
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HomeTabOption;
