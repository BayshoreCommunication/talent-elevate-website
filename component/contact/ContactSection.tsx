import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

import MotionFadeIn from "../shared/ui/MotionFadeIn";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div className="my-12 sm:my-20 container mx-auto pt-16 px-4">
      <MotionFadeIn>
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mb-4 sm:mb-5">
          Contact Info
        </h5>
        <h2 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-primary-foreground mb-8 sm:mb-12">
          We are always happy to assist you
        </h2>
      </MotionFadeIn>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1 w-full">
          <MotionFadeIn delay={0.1}>
            <div className="flex items-center my-8">
              <div className="bg-orange-100 p-4 rounded-lg mr-4">
                <LuPhone className="text-orange-500 size-6" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#696868]">
                  Telephone Number
                </h4>
                <h2 className="text-xl font-bold">+458 123 657 23</h2>
              </div>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.2}>
            <div className="flex items-center my-8">
              <div className="bg-orange-100 p-4 rounded-lg mr-4">
                <HiOutlineMailOpen className="text-orange-500 size-6.5" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#696868]">
                  Email Address
                </h4>
                <h2 className="text-xl font-bold">info@example.com</h2>
              </div>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.3}>
            <div className="flex items-center my-8">
              <div className="bg-orange-100 p-4 rounded-lg mr-4">
                <IoLocationOutline className="text-orange-500 size-7" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-[#696868]">
                  Office Location Address
                </h4>
                <h2 className="text-xl font-bold">
                  14/A, Kilix Home Tower, NYC
                </h2>
              </div>
            </div>
          </MotionFadeIn>
        </div>
        <MotionFadeIn delay={0.2} className="flex-1 w-full">
          <ContactForm />
        </MotionFadeIn>
      </div>
    </div>
  );
};

export default ContactSection;
