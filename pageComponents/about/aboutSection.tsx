import { ComponentProps, FunctionComponent } from "react";
import AnchorLink from "../../components/Link/AnchorLink";

import styles from "./about.module.scss";

const AboutSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <div className={styles.container}>
      <section
        className={styles["section-container"]}
        id="about"
        aria-labelledby="section-about"
      >
        <h2 id="section-about">About me</h2>

        <p>
          Hey there, I&apos;m <span className="text-accent">Juan</span>. I&apos;m a{" "}
          <span className="text-accent">software engineer from Uruguay</span> and I
          specialize in frontend development with{" "}
          <span className="text-accent">React.js.</span>
        </p>

        <p>
          Despite my passion for Frontend, I kickstarted my career as a full stack
          developer working for a very small startup. There I had the opportunity to work
          with a multitude of small/medium projects and clients, allowing me to gain
          experience in many technologies and areas including DevOps and Machine Learning.
        </p>

        <p>
          Nowadays I&apos;m working as a{" "}
          <span className="text-accent">Technical Lead</span> for an{" "}
          <AnchorLink
            href="https://www.expressable.io/"
            target={"_blank"}
            variant="colored"
          >
            American company in the Health Industry
          </AnchorLink>
          .
        </p>
      </section>
      <aside aria-labelledby="aside-technologies" className={styles.technologies}>
        <h3 id="aside-technologies">My most used technologies</h3>
        <ul className="styled-ul">
          <li>React.js</li>
          <li>JavaScript (ES6+)</li>
          <li>Typescript</li>
          <li>Next.js</li>
          <li>GoLang</li>
          <li>Tailwind CSS</li>
          <li>Sass / CSS</li>
        </ul>
      </aside>
    </div>
  );
};

export default AboutSection;
