"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroPartners from "./hero-partners";
import HeroSectionShow from "./hero-section-show";

// cal.com calender integration for the booking button
import { getCalApi } from "@calcom/embed-react";
import Canonical from "@/seo/Canonical";

export default function Hero() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "schedule-call" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#0009ff" }, dark: {} },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    AOS.init({
      once: false,
      startEvent: "DOMContentLoaded", // Start animation when DOM is loaded
      duration: 700, // Default duration for all animations
      delay: 0, // Remove default delay
      offset: 0, // Trigger animations immediately when elements enter viewport
    });
  }, []);

  return (
    <><Canonical uid="" />
    <main
      className="w-screen relative  bg-gradient-to-b from-background3 via-background3 to-white "
      id="home"
    >
      <div className="absolute w-screen h-80 md:h-dvh top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/spotlight.webp"
            alt="Background Image"
            fill
            priority
            className="object-fill"
          />
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center 
  bg-gradient-to-b from-transparent via-transparent to-white 
  [mask-image:linear-gradient(to bottom, black 80%, transparent 100%)] 
  dark:bg-black"
      ></div>
      <div className="w-full pt-28 pb-10 px-6   lg:px-14    h-fit flex items-center justify-center ">
        <div className="w-full  lg:max-w-6xl items-center h-fit flex flex-col bg-purple-40  ">
          {/* <HeroSectionShow title="Quality. Speed. Trust." /> */}

          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-clashgrotesk mt-8  flex flex-wrap font-semibold text-3xl md:text-5xl  lg:text-6xl xl:text-7xl text-center"
          >
            Grow your Business with Advanced Software Solutions
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className=" w-full flex flex-col gap-4 items-center justify-center mt-6"
          >
            <p className="text-sm sm:text-base text-center  lg:max-w-[823px] text-description md:text-lg font-normal font-inter leading-normal md:leading-relaxed lg:w-[85%]">
              Venas Technology is a global software company specialized in
              building custom software solutions, scalable digital platforms,
              and providing top tech talent.
              {/* <br />
              guided by advisors from{" "}
              <span className="font-semibold text-foreground">
                Bloomberg
              </span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">Uber</span>{" "} */}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="z-30 mt-8 md:mt-12 justify-start items-center gap-2 md:gap-5 flex max-md:flex-col max-md:w-full"
          >
            <Button
              className="rounded-full p-5 md:p-7 text-base font-semibold max-md:w-full"
              data-cal-namespace="schedule-call"
              data-cal-link="/venas-technology/30min"
              data-cal-config='{"layout":"month_view","theme":"light"}'
            >
              Book A Free Call
            </Button>
            <Button
              className="rounded-full  p-5 md:p-7 text-base font-semibold border-primary max-md:w-full "
              variant={"outline"}
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      <HeroPartners />
    </main>
    </>
  );
}

