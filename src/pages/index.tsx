import Hero from "components/Hero";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl p-6 mx-auto xl:px-30" id="hero">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
