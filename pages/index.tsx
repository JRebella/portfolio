import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../pageComponents/about/aboutSection";
import ExperienceSection from "../pageComponents/experience/ExperienceSection";
import HomeSection from "../pageComponents/home/HomeSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Rebella | Software Engineer</title>
        <meta name="Juan Rebella Portfolio" content="A professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSection />
      <AboutSection />

      <ExperienceSection />
    </>
  );
};

export default Home;
