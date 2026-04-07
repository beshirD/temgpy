"use client";

import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();

  return (
    <section className="w-screen flex items-center justify-center mx-auto bg-background2 overflow-hidden  py-14 md:py-18 lg:py-20">
      <div className="flex flex-col   justify-center items-start mx-auto px-4  lg:w-[1242px] ">
        <SectionShow
          title="About Us"
          className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
        />
        <div className="flex mt-8 flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16">
          <div
            className={cn(
              "flex group relative flex-col  lg:px-0 w-full h-full lg:w-1/2 gap-5"
            )}
          >
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              className=" justify-start  text-background2-foreground text-3xl lg:text-4xl font-extrabold font-gilroy  leading-[38px] md:leading-[48px]"
            >
              The Right Technology Partner for Your Business
            </p>

            <Button
              
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="700"
              className=" rounded-full mt-6  md:mt-8 lg:mt-12 w-fit py-4 px-7"
              size={"lg"}
              onClick={() => {
        // Navigate to /about-us
        router.push("/about-us");
        // Scroll to top immediately after navigation
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
              <Link href={"/about-us"}>More About Us!</Link>
            </Button>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 gap-3 md:gap-5 ">
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              className="lg:w-[550px] justify-start text-background2-description text-md md:text-lg pr-5 font-normal font-inter leading-relaxed"
            >
              From software development to IT consultation, we deliver solutions
              that drive results.
            </p>
            <div className="pl-1 text-md md:text-lg mt-3 md:mt-5 inline-flex flex-col justify-start items-start gap-3 md:gap-4">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                className="inline-flex justify-start items-end gap-5"
              >
                <CircleCheck className="size-7" fill="#428DFF" />
                <div className="justify-start">
                  <span className="text-background2-foreground  font-bold font-inter leading-relaxed">
                    99.9%{" "}
                  </span>
                  <span className="text-background2-foreground  font-normal font-inter leading-relaxed">
                    Job Success Rate
                  </span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
                className="self-stretch inline-flex justify-start items-end gap-5"
              >
                <CircleCheck className="size-7" fill="#428DFF" />
                <p className="justify-start text-background2-foreground  font-medium font-inter leading-relaxed">
                  Experienced Team Members
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="600"
                className="inline-flex justify-start items-end gap-5"
              >
                <CircleCheck className="size-7" fill="#428DFF" />
                <p className="justify-start text-background2-foreground  font-normal font-inter leading-relaxed">
                  High Quality Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
