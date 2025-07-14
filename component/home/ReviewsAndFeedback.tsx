"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviewsList = [
  [
    {
      name: "Emma Johnson",
      rating: 5,
      url: "/assets/home/review-images/image.png",
      comment:
        "Capable has truly transformed my social life. I've connected with amazing people and discovered new interests. Highly recommended!",
    },
    {
      name: "John Doe",
      rating: 5,
      url: "/assets/home/review-images/Image-1.png",
      comment:
        "The intuitive design and smart features of Capable made it easy to find meaningful connections. It's become my go-to app.",
    },
    {
      name: "Emily Johnson",
      rating: 5,
      url: "/assets/home/review-images/Image-2.png",
      comment:
        "I love how Capable helps me stay in touch with friends and meet new people. The app is user-friendly and effective.",
    },
    {
      name: "Michael Brown",
      rating: 5,
      url: "/assets/home/review-images/image.png",
      comment:
        "With Capable, I've expanded my network and found genuine connections. The seamless interface makes socializing so much easier.",
    },
    {
      name: "David Wilson",
      rating: 5,
      url: "/assets/home/review-images/Image-1.png",
      comment:
        "Capable's features are fantastic for both meeting new people and staying connected with existing friends. It's a must-have app.",
    },
    {
      name: "Laura Martinez",
      rating: 5,
      url: "/assets/home/review-images/Image-2.png",
      comment:
        "I'm amazed at how Capable’s advanced privacy controls and customizable features have enhanced my online social experience. Truly innovative.",
    },
    {
      name: "James Taylor",
      rating: 5,
      url: "/assets/home/review-images/image.png",
      comment:
        "The community support and engaging multimedia sharing on Capable have made it my favorite platform for connecting and sharing.",
    },
    {
      name: "Olivia Anderson",
      rating: 5,
      url: "/assets/home/review-images/Image-2.png",
      comment:
        "Capable has made socializing more enjoyable and efficient. The personalized experience helps me connect with others who share my interests.",
    },
  ],
];

const ReviewsAndFeedback = () => {
  return (
    <section className="bg-white py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Reviews and Feedback
        </motion.h2>
        <motion.h5
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          See how Capable has transformed users' social experiences through
          <br />
          their own words.
        </motion.h5>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {reviewsList.flat().map((review, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow flex flex-col items-center text-center"
              style={{
                backgroundImage: "url('/assets/home/card-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <Image
                  width={100}
                  height={100}
                  src={review.url}
                  alt={review.name}
                  className="w-[60px] h-[60px] rounded-full object-cover mb-3"
                  priority
                />
                <div className="">
                  <h6 className="font-semibold text-primary-foreground text-lg">
                    {review.name}
                  </h6>
                  <div className="flex items-center justify-center mt-1 mb-2">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500 fill-yellow-500"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={0}
                          d="M12 17.27L18.18 21 16.54 13.97 \
              22 9.24 14.81 8.63 12 2 9.19 \
              8.63 2 9.24 7.46 13.97 5.82 21 \
              12 17.27z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-gray-200 my-4" />

              <p className="text-base text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsAndFeedback;
