"use client";

import AboutUs from "@/components/sections/about/about-us";
import CoreValues from "@/components/sections/about/core-values";
import Home from "@/components/sections/about/home";
import Mission from "@/components/sections/about/mission";
import OurStory from "@/components/sections/about/our-story";
import TeamSection from "@/components/sections/about/our-team";
import OurTeam from "@/components/sections/about/our-team";
import Vision from "@/components/sections/about/vision";
import FeaturesCarousel from "@/components/common/features";
import Partners from "@/components/sections/main/partners";
import Canonical from "@/seo/Canonical";
import React from "react";
import ContactFooter from "@/components/common/contact-footer";
import { useEffect } from "react";


// SEO - AboutPage Schema

import AboutPageSchema from "@/seo/AboutPageSchema";

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Canonical uid="about-us" /> {/* dynamic canonical */}
      <AboutPageSchema />
      <main className="relative">
        <Home />
        <FeaturesCarousel
          LeftEdgeColor="from-white"
          RightEdgeColor="from-white"
          className="py-12  md:py-16 "
        />
        <OurStory />
        <Mission />
        <Vision />
        {/* <TeamSection /> */}
        <CoreValues />
        <div className=" ">
          <Partners />
        </div>
        <ContactFooter />
      </main>
    </>
  );
}
