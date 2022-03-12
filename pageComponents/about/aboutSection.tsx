import { ComponentProps, FunctionComponent } from "react";
import AnchorLink from "../../components/Link/AnchorLink";

import styles from "./about.module.scss";

const AboutSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <section className={styles.container} id="about">
      <h2>About me</h2>

      <p>
        Hey there, I'm <span className="text-accent">Juan</span>. I'm a{" "}
        <span className="text-accent">software engineer from Uruguay</span> and I
        specialize myself on frontend development with{" "}
        <span className="text-accent">React.js.</span>
      </p>

      <p>
        Despite my passion for Frontend, I also had my years as a full stack developer. I
        had the opportunity to work at a small startup where I rotated through a multitude
        of small/medium projects and clients, allowing me to gain experience in many areas
        including DevOps and Machine Learning.
      </p>

      <p>
        Today I'm currently working on building an{" "}
        <AnchorLink
          href="https://wwnorton.github.io/design-system/"
          target={"_blank"}
          variant="colored"
        >
          open source design system
        </AnchorLink>{" "}
        with a focus on accessibility using React & Sass (along many other technologies).
      </p>
    </section>
  );
};

export default AboutSection;
