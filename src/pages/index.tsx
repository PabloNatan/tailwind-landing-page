import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl p-6 mx-auto xl:px-40">
      <Navbar />
    </div>
  );
};

export default Home;
