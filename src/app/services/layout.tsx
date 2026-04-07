
import { Metadata } from "next";
// import React, { PropsWithChildren } from "react";
import React, { PropsWithChildren} from "react";
import ScrollToTop from "../../components/ScrollToTop";

export const metadata: Metadata = {
  title:
    "Software Development & AI Solutions",
  description:
    "Explore Venas Technologies' wide range of services, including custom software development, cloud solutions, and AI-powered systems designed to help your business scale and innovate.",
  keywords: [
    "Venas Technologies services",
    "software development",
    "AI solutions",
    "cloud platforms",
    "IT outsourcing",
    "custom software",
    "business automation",
    "digital transformation",
    "enterprise software",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Software Development & AI Solutions",
    description:
      "Explore our comprehensive services at Venas Technologies, from AI and cloud platforms to scalable custom software that drives digital transformation.",
    url: "https://www.venastechnology.com/services",
    type: "website",
    images: [
      {
        url: "https://www.venastechnology.com/services-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies Services Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Software Development & AI Solutions",
    description:
      "Discover how Venas Technologies delivers AI, cloud, and custom software solutions to power your digital growth.",
    images: ["https://www.venastechnology.com/services-preview.png"],
  },
};

const ServicePageLayout = ({ children }: PropsWithChildren) => {
  return(
  <>
  <ScrollToTop />
  {children}
  </>
  );
};


export default ServicePageLayout;
