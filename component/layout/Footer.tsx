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
        <div className="container py-16 mx-auto px-4">
          <div className="md:flex md:justify-center">
            <div className="grid justify-center grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5 w-full">
              <div className="col-span-2 mx-auto mb-6 md:mb-0 md:mx-0 max-w-xs w-full flex flex-col items-center md:items-start">
                <Link
                  href="/"
                  className="flex items-center justify-center cursor-pointer md:justify-start"
                >
                  <Image
                    width={180}
                    height={60}
                    src="/assets/logo/talent-elevate-logo.png"
                    alt="Talent Elevate Logo"
                    className="object-contain w-48 md:w-44 lg:w-52 h-auto"
                  />
                </Link>
                <p className="py-5 text-[16px] font-normal text-center text-black md:text-left max-w-[350px] leading-7">
                  Talent Elevate is a thriving community where innovators,
                  professionals, and enthusiasts come together to share
                  knowledge, collaborate, and grow.
                </p>

                <div className="text-white flex justify-center md:justify-start gap-3 mt-4 md:mt-4 ">
                  <Link
                    href="https://www.facebook.com/MelamedLawPLLC"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaFacebookF className="size-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/melamedlawpllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaLinkedinIn className="size-5" />
                  </Link>
                  <Link
                    href="https://x.com/Melamedlawpllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
                  >
                    <FaTwitter className="size-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/melamedlaw_pllc"
                    target="_blank"
                    className="inline-block p-2 rounded bg-secondary hover:bg-primary duration-300"
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
              <div className="w-full">
                <h2 className="text-[20px] font-semibold text-black">
                  Quick Links
                </h2>
                <hr className="mt-2 mb-6 w-24 border-secondary" />
                <ul className="ml-0 text-black list-none text-[16px] font-medium">
                  {SITECONFIG?.footer?.quick_links?.map((el, index) => (
                    <li className="mb-3" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="text-[20px] font-semibold text-black">
                  Legal Areas
                </h2>
                <hr className="w-28 mt-2 mb-6 border-secondary" />
                <ul className="ml-0 text-[16px] font-medium text-black list-none">
                  {SITECONFIG?.footer?.company?.map((el, index) => (
                    <li className="mb-3" key={index}>
                      <Link href={el.slug} className="hover:underline">
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1 w-full">
                <h2 className="font-semibold text-black text-[20px]">
                  Contact us
                </h2>
                <hr className="w-20 mt-2 mb-6 border-secondary" />
                <ul className="ml-0 text-[16px] font-medium text-black list-none">
                  <li className="mb-3">
                    <div className="flex items-center gap-x-1">
                      <IoLocationSharp className="size-6 text-secondary" />
                      <h3 className="font-semibold text-black text-[18px]">
                        Location
                      </h3>
                    </div>
                    <Link
                      href="https://maps.app.goo.gl/gPaF4mQkx4wGQjaK8"
                      className="hover:underline duration-300 text-sm"
                      target="_blank"
                    >
                      3040 NE 190th St APT 303, Aventura, FL 33180,
                      United States
                    </Link>
                  </li>
                  <li className="mb-3">
                    <div className="flex items-center gap-x-1">
                      <RiPhoneFill className="size-6 text-secondary" />
                      <h3 className="font-semibold text-black text-[18px]">
                        Contact
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <Link
                        href="tel:+1234567890"
                        className="hover:underline duration-300 text-sm"
                      >
                        {`+123 456 7890`}
                      </Link>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="flex items-center gap-x-1">
                      <MdMarkEmailUnread className="size-6 text-secondary" />
                      <h3 className="font-semibold text-black text-[18px]">
                        Email
                      </h3>
                    </div>
                    <div className="flex flex-col gap-px">
                      <Link
                        href="mailto: support@mm.com"
                        className="hover:underline duration-300 text-sm"
                      >
                        support@mm.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-[16px] font-medium text-center text-black">
              © 2025{" "}
              <a
                href="https://www.melamedlawpllc.com/"
                className="hover:underline text-secondary"
              >
                Talent Elevate
              </a>
              . All Rights Reserved.
            </div>
            <div className="text-[16px] font-medium text-center text-black">
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
