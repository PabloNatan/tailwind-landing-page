import CallToAction from "components/CallToAction";
import Features from "components/Features";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Testimonials from "components/Testimonials";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Manage</title>
      </Head>
      <div id="hero" style={{ minWidth: "375px" }}>
        <Navbar />
        <Hero />
        <hr />
        <Features />
        <hr />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
