"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    // { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === "#contact-us") {
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

  // Helper function to determine if a nav item is active
  const isNavItemActive = (itemPath: string) => {
    // Exact match for root, startsWith for nested routes
    if (itemPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemPath);
  };

  const isOnDarkRoute =
    pathname.startsWith("/blogs") || pathname.startsWith("/services/");
  return (
    <nav
      className={cn(
        `fixed w-screen  z-[2350]  h-24 top-0 flex  justify-center border-b-0 border-transparent  transition-all duration-200 ease-in-out bg-gradient-to-b from-background3 via-background3 to-transparent   `,
        (isScrolled || isOnDarkRoute) &&
          "to-background3 h-16 border-border  border-b"
      )}
    >
      <div
        className={`w-full   font-inter px-6    lg:pl-14 lg:pr-10  max-w-[1400px]  justify-between flex `}
      >
        <div className="flex items-center justify-start w-1/2 md:w-1/4 lg:w-1/3">
          <div
            className="md:hidden hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image src="/dark-logo.svg" alt="logo" width={256} height={30} />
          </div>

          <div
            className="hidden md:flex hover:cursor-pointer "
            onClick={() => router.push("/")}
          >
            <Image src="/dark-logo.svg" alt="logo" width={180} height={90} />
          </div>
        </div>

        <div className="hidden md:flex gap-5 items-center justify-center w-1/2 lg:w-1/3">
          {navItems.map((item) => {
            const isActive = isNavItemActive(item.path);
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className={`text-base py-2.5 h-full   font-inter leading-normal transition-all duration-300 ${
                    isActive
                      ? " font-semibold"
                      : " font-normal hover:font-semibold"
                  }`}
                >
                  {item.name}
                  <span
                    className={`self-center  w-full absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black to-transparent transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <div className=" flex items-center justify-end w-1/2 md:w-1/4 lg:w-1/3">
          <button
            onClick={toggleMenu}
            className="md:hidden text-black"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="flex flex-col px-0 space-y-1.5 py-0 h-5 w-7 bg-transparent items-end justify-end text-white/90 ">
              <span
                className={cn(
                  "w-full h-0.5 bg-black/90 rounded-full transition-all duration-300  rotate-0 translate-y-0 ",
                  isMenuOpen && "w-4/5 rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "w-4/5 h-0.5 bg-black/90 rounded-full  rotate-0 transition-all duration-300 ",
                  isMenuOpen && " w-4/5 -rotate-45"
                )}
              />
              <span
                className={cn(
                  "w-[60%] h-0.5 bg-black/90 rounded-full transition-all duration-300",
                  isMenuOpen && "w-0"
                )}
              />
            </span>
          </button>

          <div className="hidden md:flex gap-7 items-center">
            <Button className="rounded-full" asChild>
              <Link href="/contact-us">
                <span className="font-bold">Contact Us</span>
                {/* <ArrowUpRight className="size-4" /> */}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-[70px] left-0 right-0 mx-1.5 bg-background3 border-0 shadow-lg shadow-black/5 rounded-4xl overflow-hidden md:hidden z-50 transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "max-h-[400px] border" // enough space for all items
            : "max-h-0"
        )}
      >
        <div className="max-h-[80vh] overflow-y-auto py-4 px-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = isNavItemActive(item.path);
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-base py-2  font-inter leading-normal transition-colors duration-300 border-b /10 ${
                  isActive ? " font-extrabold" : " font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            scroll={true}
            className="py-3 transition-colors duration-300  font-normal text-base flex items-center gap-1 border-b border-white/10"
            onClick={(e) => {
              setIsMenuOpen(false);
            }}
          >
            Contact Us
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
