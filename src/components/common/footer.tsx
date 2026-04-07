"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import { Check } from "lucide-react";
import FooterSocials from "./footer-socials";
import Image from "next/image";
import CopyButton from "./copy-button";
import { usePathname, useRouter } from "next/navigation";
import FooterNewsletter from "./footer-newsletter";
import { footerData } from "@/config/footer";

const CustomLink: React.FC<{
  children: React.ReactNode;
  href: string;
  className?: string;
}> = ({ children, href, className = "" }) => {
  return (
    <div className="relative group flex">
      <Link
        href={href}
        className={cn(
          "justify-start text-white/70 text-base font-normal font-inter leading-normal  w-full",
          className
        )}
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-white/30 via-white to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </div>
  );
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.startsWith("/") ? href : `/${href}`;

    if (pathname !== "/") {
      router.push(targetId);
    } else {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]);

  return (
    <footer
      id="contact-us"
      className="bg-background2 border-t-2 border-stone-600/40 w-full mx-auto items-center justify-center flex flex-col text-white pt-16 md:pt-32 gap-8 pb-10 px-4"
    >
      {/* <FooterNewsletter /> */}
      <div className="max-w-7xl w-full relative mx-auto flex flex-col lg:flex-row justify-between gap-14">
        <div className="flex flex-col gap-8">
          <Image
            src="/footer-icon.svg"
            alt="logo"
            width={100}
            height={100}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-2xl"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="text-xl  font-normal font-gilroy leading-normal lg:max-w-[490px]"
          >
            Your trusted partner for secure, scalable software solutions, talent
            outsourcing, and expertise in AI and Cloud. Let&apos;s build the
            future together.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            className="text-base font-normal font-inter leading-tight"
          >
            Venas Technologies, 2025.
          </p>
        </div>
        <div className="flex space-x-20 flex-wrap gap-y-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className="flex flex-col space-y-4"
          >
            <p className="justify-start text-white text-lg font-normal font-gilroy uppercase leading-normal pb-3">
              Services
            </p>

            {/* {footerData.SERVICES.map((service) => (
              <div key={service} className="relative group">
                <div className="text-white/70">{service}</div>
              </div>
            ))} */}
            

            {footerData.SERVICES.map((service) => (
            <div key={service.href} className="relative group">
            <Link
      href={service.href}
      className="text-white/70 hover:text-white transition"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {service.label}
    </Link>
  </div>
))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            className="flex flex-col space-y-4"
          >
            <p className="justify-start text-white text-lg font-normal font-gilroy uppercase leading-normal pb-3">
              Links
            </p>
            {footerData.LINKS.map((link) => (
              <CustomLink key={link.href} href={link.href}>
                {link.label}
              </CustomLink>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
            className="flex flex-col space-y-4"
          >
            <p className="justify-start text-white text-lg font-normal font-gilroy uppercase leading-normal pb-3">
              Contact
            </p>

            {footerData.CONTACT.map((contact, index) => (
              <p key={index} className="flex items-center gap-2">
                {contact.country && contact.country + ": "}
                <CopyButton key={index} text={contact.contact} />
              </p>
            ))}
            <div className="relative group">
              <div className="text-white/70">UK: Coming soon...</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="max-w-7xl bg-white/25 my-10 mt-16 lg:mt-24" />
      <div className="max-w-7xl w-full h-12 mb-5 relative px-8 flex flex-wrap gap-5 items-center justify-center md:justify-between">
        <div className="flex justify-center items-center gap-4">
          <span className="bg-white rounded-full p-1 size-4 text-black flex items-center justify-center">
            <Check className="size-4" />
          </span>
          <p className="text-white text-base font-medium font-inter leading-tight">
            Available on all platforms
          </p>
        </div>
        <FooterSocials />
      </div>
    </footer>
  );
}
