import Image from "next/image";
import React from "react";
import accesible from "@/app/assets/accesible.png";
import cross from "@/app/assets/crossbrowser-compatible.png";
import responsive from "@/app/assets/responsive.png";
import tested from "@/app/assets/tested.png";
const About = () => {
  return (
    <>
      <div>
        <h1 className="md:text-5xl font-bold text-center pt-4 sm:text-4xl">
          The Biggest Tailwind UI Library
        </h1>

        <p className="pt-6 text-gray-300 text-center mx-8 md:text-base sm:text-sm">
          amader ui gives developers the functionality to fast track their
          workflow with thousand <br /> of components amd templates
        </p>

        <div class=" bg-black">
          <div class="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-4 bg-black p-10 pt-28 mx-14">
            <div class="block rounded-xl border border-gray-800 p-4 flex flex-col items-center justify-center">
              <span class="inline-block rounded-lg">
                <div class="inline-flex align-middle justify-center items-center select-none text-white pt-4">
                  <Image src={responsive} />
                </div>
              </span>

              <h2 class=" font-semibold text-base sm:text-lg text-white">
                Responsive Design
              </h2>
              <p class="sm:mt-1 block text-sm sm:text-base text-gray-300 relative">
                Adaptive design that provides a <br />
                <p className="pl-3">consistent experience across</p> <br />
                <p className="absolute mt-[-24px] pl-[70px]">breakpoints</p>
              </p>
            </div>

            <div class="block rounded-xl border border-gray-800 p-4 flex flex-col items-center justify-center">
              <span class="inline-block rounded-lg p-3">
                <div class="inline-flex align-middle justify-center items-center select-none text-white">
                  <Image src={tested} />
                </div>
              </span>
              <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                Tested components
              </h2>
              <p class="sm:mt-1 block text-sm sm:text-base text-gray-300 relative">
                Rigorously tested components <br />{" "}
                <p className="pl-3">that meet the highest quality</p> <br />
                <p className="absolute mt-[-24px] pl-[70px]">standards.</p>
              </p>
            </div>

            <div class="block rounded-xl border border-gray-800 p-4 flex flex-col items-center justify-center">
              <span class="inline-block rounded-lg p-3">
                <div class="inline-flex align-middle justify-center items-center select-none text-white">
                  <Image src={cross} />
                </div>
              </span>

              <h2 class="mt-2 font-semibold text-base sm:text-lg text-white">
                Cross browser compatible
              </h2>
              <p class="sm:mt-1 block text-sm sm:text-base text-gray-300">
                <span className="pl-3">Cross browser compatible</span> <br />
                <p className="">components that are consistent </p>
                <br />
                <p className="absolute mt-[-24px] pl-[40px]">
                  throughout the web
                </p>
              </p>
            </div>

            <div class="block rounded-xl border border-gray-800 p-4 flex flex-col items-center justify-center">
              <span class="inline-block rounded-lg p-3">
                <div class="inline-flex align-middle justify-center items-center select-none text-white">
                  <Image src={accesible} />
                </div>
              </span>
              <h2 class="mt-2 font-semibold  text-3xl sm:text-lg text-white">
                Inclusive & accessible
              </h2>
              <p class="sm:mt-1 block text-sm sm:text-base text-gray-300">
                <span className="pl-3">Built on the curb-cut effect,</span>{" "}
                <br /> WCAG accessibility comes baked <br /> in for a truly
                inclusive experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-center">
          <h1 className="lg:text-5xl sm:text-3xl font-bold space-y-2">
            Are you ran out of stuff to write ,here <br /> are free components
            to get you started
          </h1>
        </div>
        <div className="flex items-center justify-center pt-4">
          <button className="text-center text-lg h-10 w-[180px] bg-red-500 rounded">
            Get Started for free
          </button>
        </div>
        <p className="text-center pt-2 text-gray-400 text-sm">
          No credit card required
        </p>
      </div>
    </>
  );
};

export default About;
