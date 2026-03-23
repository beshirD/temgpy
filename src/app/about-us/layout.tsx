import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "About Venas Technologies | Software Development Company",
  description:
    "Discover Venas Technologies, a trusted software and AI solutions company delivering custom software, cloud platforms, and tech talent to empower businesses globally.",
  keywords: [
    "about Venas Technologies",
    "digital transformation",
    "AI solutions",
    "custom software development",
    "cloud solutions",
    "software outsourcing",
    "tech talent solutions",
    "scalable software platforms",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "About Venas Technologies | Software Development Company",
    description:
      "Discover Venas Technologies, a trusted software and AI solutions company delivering custom software, cloud platforms, and tech talent to empower businesses globally.",
    url: "https://www.venastechnology.com/about-us",
    type: "website",
    images: [
      {
        url: "https://www.venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies About Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Venas Technologies | Software Development Company",
    description:
      "Discover Venas Technologies, a trusted software and AI solutions company delivering custom software, cloud platforms, and tech talent to empower businesses globally.",
    images: ["https://www.venastechnology.com/media-preview.png"],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
