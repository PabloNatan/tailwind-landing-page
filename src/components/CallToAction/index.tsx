import React from "react";

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="flex flex-col py-9 items-center  px-6 mt-12 bg-brightRed md:flex-row md:py-16 md:justify-between"
    >
      <h2 className="text-white text-3xl mb-8 font-bold text-center md:text-left md:mb-0">
        Simplify how your team works today
      </h2>

      <button className="btn-secondary px-12 py-4 text-md">Get Started</button>
    </section>
  );
};

export default CallToAction;
