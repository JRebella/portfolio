import { ComponentProps, FunctionComponent } from "react";

import styles from "./about.module.scss";

const AboutSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <section className={styles.container}>
      <h2>About me</h2>

      <div>
        <p>
          Hey there, I'm <span className="text-accent">Juan</span>. I'm a{" "}
          <span className="text-accent">software engineer from Uruguay</span>{" "}
          and I specialize myself on frontend development with{" "}
          <span className="text-accent">React.js.</span>
        </p>

        <p>
          If you're looking for a "robot" developer, I'm not your guy, I like to
          go deep into the business and understand it. If a requirement doesn't
          feel right to me or I think there's a better way of solving a problem,
          I'll speak up try to sprout a discussion.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
