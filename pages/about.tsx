import type { NextPage } from "next";
import Head from "next/head";
import Badge from "../components/Badge/Badge";
import AnchorLink from "../components/Link/AnchorLink";
import styles from "./about.module.scss";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Rebella | Software Engineer</title>
        <meta name="Juan Rebella Portfolio" content="A professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.container}>
        <div>
          <h1>About this Portfolio / Credits</h1>

          <p>
            Given that design is not my strongest field, the visual design for this
            portfolio (including color palette and visual arrangement) was heavily
            inspired on{" "}
            <AnchorLink href="https://brittanychiang.com/" target={"_blank"}>
              Brittany Chiang&apos;s
            </AnchorLink>{" "}
            portfolio. Although her portfolio is{" "}
            <AnchorLink href="https://github.com/bchiang7/v4" target={"_blank"}>
              open source
            </AnchorLink>{" "}
            <AnchorLink
              variant="colored"
              href="https://github.com/JRebella/portfolio"
              target={"_blank"}
            >
              (as well as mine!)
            </AnchorLink>
            , I wrote everything from scratch; merely using her portfolio as a visual
            guide, not as a template.
          </p>
          <hr />
          <p>This project was built with the following technologies:</p>

          <ul className="styled-ul">
            <li>React / Next.js</li>
            <li>Sass & CSS for styles</li>
            <li>
              <AnchorLink
                variant="colored"
                href="https://vercel.com/home"
                target={"_blank"}
              >
                Vercel
              </AnchorLink>
              <span> for continuous deployments</span>
            </li>
          </ul>

          <hr />

          <p>
            If you have any constructive feedback or just want to say nice job feel free
            to message me on LinkedIn!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
