"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Icons } from "../ui/icons";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  label: string;
  width?: number;
}

export default function FooterSocials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [linkWidths, setLinkWidths] = useState<number[]>([]);
  const nameRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const socialLinks: SocialLink[] = [
    // {
    //   name: "Facebook",
    //   icon: <Facebook className="h-5 w-5" />,
    //   url: "https://facebook.com",
    // },
    // {
    //   name: "Instagram",
    //   icon: <Instagram className="h-5 w-5" />,

    //   url: "https://instagram.com",
    // },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      label: "Follow Venas Technologies on LinkedIn",
      url: "https://www.linkedin.com/company/106809924",
    },
    {
      name: "Upwork",
      icon: <Icons.Upwork className="h-5 w-5" />,
      label: "Hire Venas Technologies on Upwork",
      url: "https://www.upwork.com/agencies/1906779003227193271/",
    },
    // {
    //   name: "Twitter",
    //   icon: <Icons.XTwitter className="h-5 w-5" />,
    //   url: "https://x.com",
    // },
  ];

  // Measure text widths on mount
  useEffect(() => {
    const widths = nameRefs.current.map((ref) => {
      return ref ? ref.getBoundingClientRect().width + 40 : 120; // 50px for padding and icon
    });
    setLinkWidths(widths);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center gap-4">
        {socialLinks.map((link, index) => {
          const isActive = activeIndex === index;
          const expandedWidth = linkWidths[index] || 120; // Fallback width

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              aria-label={link.label}
              rel="noopener noreferrer"
              className="flex h-10 items-center rounded-full bg-transparent shadow-md outline outline-1 outline-offset-[-1px] outline-neutral-300/25"
              onHoverStart={() => setActiveIndex(index)}
              animate={{
                width: isActive ? expandedWidth : 40,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smooth motion
              }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white">
                {link.icon}
              </div>
              <span className="sr-only">{link.label}</span>
              <div
                className="overflow-hidden"
                style={{
                  width: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.2s ease-in-out",
                }}
              >
                <span
                  ref={(el) => {
                    nameRefs.current[index] = el;
                  }}
                  className="whitespace-nowrap pr-4 text-sm font-medium text-white/80"
                >
                  {link.name}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Hidden elements to measure text widths */}
      <div className="absolute -left-[9999px] -top-[9999px]">
        {socialLinks.map((link, index) => (
          <span
            key={`measure-${link.name}`}
            ref={(el) => {
              if (!nameRefs.current[index]) {
                nameRefs.current[index] = el;
              }
            }}
            className="whitespace-nowrap pr-4 text-sm font-medium"
          >
            {link.name}
          </span>
        ))}
      </div>
    </div>
  );
}
