import CallToAction from "components/CallToAction";
import Features from "components/Features";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div id="hero">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
