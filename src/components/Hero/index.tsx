import Image from "next/image";
import React from "react";

import heroImage from "assets/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center mt-10 md:flex-row md:justify-between">
      <div className="flex flex-col space-y-12 md:w-1/2 md:mt-16">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-6xl">
          Bring everyone together to build better products
        </h1>

        <p className="text-center text-darkGrayishBlue md:text-left md:text-xl">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <button className="btn-primary px-12 py-2 mx-auto md:mr-auto md:mx-0">
          Get Started
        </button>
      </div>

      <div className="w-9/12 md:w-5/12">
        <Image src={heroImage} alt="An table, and donnut chart" />
      </div>
    </div>
  );
};

export default Hero;