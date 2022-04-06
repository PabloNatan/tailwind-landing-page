import Features from "components/Features";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl p-6 mx-auto xl:px-30" id="hero">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
