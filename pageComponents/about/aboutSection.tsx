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
          specialize on frontend development with{" "}
          <span className="text-accent">React.js.</span>
        </p>

        <p>
          Despite my passion for Frontend, I also had my years as a full stack developer.
          I had the opportunity to work at a small startup where I rotated through a
          multitude of small/medium projects and clients, allowing me to gain experience
          in many areas including DevOps and Machine Learning.
        </p>

        <p>
          Today I&apos;m currently working on building an{" "}
          <AnchorLink
            href="https://wwnorton.github.io/design-system/"
            target={"_blank"}
            variant="colored"
          >
            open source design system
          </AnchorLink>{" "}
          with a focus on <span className="text-accent">accessibility</span> using{" "}
          <span className="text-accent">React</span> &{" "}
          <span className="text-accent">Sass</span> (along many other technologies).
        </p>
      </section>
      <aside aria-labelledby="aside-technologies" className={styles.technologies}>
        <h3 id="aside-technologies">My strong fields</h3>
        <ul className="styled-ul">
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Typescript</li>
          <li>Next.js</li>
          <li>W3C Aria</li>
          <li>GoLang</li>
          <li>Sass / CSS</li>
        </ul>
      </aside>
    </div>
  );
};

export default AboutSection;
