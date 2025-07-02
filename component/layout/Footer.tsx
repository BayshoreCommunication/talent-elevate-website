import { SITECONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container py-16 mx-auto">
          <div className="md:flex md:justify-center">
            <div className="grid justify-center grid-cols-2 gap-8 sm:gap-6 md:grid-cols-5 ">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0">
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={320}
                    height={200}
                    src="/assets/logo/talent-elevate-logo.png"
                    alt="Trip Low"
                    className="object-cover"
                  />
                </Link>
                <p className="py-5 text-[18px] font-normal text-center text-black md:text-left max-w-[450px] leading-8">
                  Contact us today to get your free case review. We answer calls
                  & texts 24/7.
                </p>

                <div className="text-white flex justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
                  <Link
                    href="https://www.facebook.com/MelamedLawPLLC"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/melamedlawpllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaLinkedinIn className="size-5" />
                  </Link>
                  <Link
                    href="https://x.com/Melamedlawpllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaTwitter className="size-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/melamedlaw_pllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary   duration-300"
                  >
                    <FaInstagram className="size-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@melamedlawpllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaYoutube className="size-5" />
                  </Link>
                </div>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-black">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-28 border-secondary" />
                <ul className="ml-0 text-black list-none text-[18px] font-medium">
                  {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                      {/* <p className="hover:underline cursor-pointer text-base">
                        {el.title}
                      </p> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h2 className="text-[22px] font-semibold text-black">
                  Legal Areas
                </h2>
                <hr className="w-32 mt-2 mb-6 border-secondary" />
                <ul className="ml-0 text-[18px] font-medium text-black list-none">
                  {SITECONFIG?.footer?.company?.map((el, index) => (
                    <li className="mb-4" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>{" "}
                      {/* <p className="hover:underline cursor-pointer text-base"> */}
                      {/*   {" "} */}
                      {/*   {el.title} */}
                      {/* </p> */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="font-semibold text-black text-[22px]">
                  Contact us
                </h2>
                <hr className="w-24 mt-2 mb-6 border-secondary" />
                <ul className="ml-0 text-[18px] font-medium text-black list-none">
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-secondary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href="https://maps.app.goo.gl/gPaF4mQkx4wGQjaK8"
                      className=" hover:underline duration-300 "
                      target="_blank"
                    >
                      3040 NE 190th St APT 303, Aventura, FL 33180,
                      United States
                    </Link>
                  </li>
                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-secondary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:954-529-0695"
                        className="hover:underline duration-300 text-base"
                      >
                        {`954-529-0695`}
                      </Link>
                      {/* <Link
                        href="tel:+18635996735"
                        className="hover:underline duration-300"
                      >
                        (863) 599-6735
                      </Link> */}
                    </div>
                  </li>

                  <li className="mb-4">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-secondary" />

                      <h3 className="font-semibold text-black text-[20px]">
                        Email
                      </h3>
                    </div>
                    <div className="flex flex-col gap-px">
                      <Link
                        href="mailto: info@melamedlawpllc.com"
                        className="hover:underline duration-300 text-base"
                      >
                        info@melamedlawpllc.com
                      </Link>
                      {/* <Link
                        href="mailto:myra@melamedlawpllc.com"
                        className="hover:underline duration-300"
                      >
                        myra@melamedlawpllc.com
                      </Link> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
          <div className="md:flex :items-center sm:justify-between">
            <div className="text-[18px] font-medium text-center text-black">
              © 2024{" "}
              <a
                href="https://www.melamedlawpllc.com/"
                className="hover:underline text-secondary"
              >
                Melamed Law
              </a>
              . All Rights Reserved.
            </div>

            <div className="text-[18px] font-medium text-center text-black">
              Design & Developed by{" "}
              <a
                href="https://www.bayshorecommunication.com/"
                target="_blank"
                className="font-medium hover:underline text-secondary"
              >
                BayShore Communication
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
