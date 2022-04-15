import React from "react";

const CallToAction = () => {
  return (
    <section
      id="cta"
      className="h-36 flex items-center  justify-between px-6 mt-12 bg-brightRed"
    >
      <h2 className="text-white text-3xl font-bold">
        Simplify how your team works today
      </h2>

      <button className="btn-secondary px-12 py-4 text-md">Get Started</button>
    </section>
  );
};

export default CallToAction;
