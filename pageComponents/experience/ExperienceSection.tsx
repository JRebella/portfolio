import { ComponentProps, FunctionComponent, Key, useState } from "react";
import Badge from "../../components/Badge/Badge";
import AnchorLink from "../../components/Link/AnchorLink";
import { TabContent, Tabs } from "../../components/Tabs/Tabs";

import styles from "./experience.module.scss";

const ExperienceSection: FunctionComponent<ComponentProps<"section">> = () => {
  const [active, setActive] = useState<Key>("spark");
  return (
    <section
      className={styles.container}
      id="experience"
      aria-labelledby="section-experience"
    >
      <h2 id="section-experience">My Experience</h2>
      <Tabs onChangeTabID={setActive} activeTabID={active}>
        <TabContent
          title="Spark Digital"
          id={"spark"}
          className={styles["tab-container"]}
        >
          <h3 className={styles["job-title"]}>
            Frontend Engineer{" "}
            <AnchorLink
              href="https://www.sparkdigital.com/en/"
              target={"_blank"}
              rel="noreferrer"
              variant="colored"
            >
              @ Spark Digital
            </AnchorLink>
          </h3>
          <h4>January 2021 - Present</h4>

          <ul className="styled-ul">
            <li>
              Frontend technology lead and main developer for a fully-accessible platform
              in the EdTech industry. Large data visualization and manipulation within a
              modern UI and excellent UX
            </li>

            <li>
              <div>
                Contributed to the development and technical design of an{" "}
                <AnchorLink
                  href="https://github.com/wwnorton/design-system"
                  target={"_blank"}
                  rel="noreferrer"
                  variant="colored"
                >
                  open source
                </AnchorLink>{" "}
                design system with a focus on accessibility
              </div>
            </li>
            <li>
              Worked closely with UX/UI experts to design reusable UI components and
              accessibility standards
            </li>
          </ul>

          <h5>Main technologies</h5>

          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Sass</Badge>
          <Badge>ES6</Badge>
          <Badge>Storybook</Badge>
          <Badge>Typescript</Badge>
          <Badge>Node</Badge>
          <Badge>Jest</Badge>
          <Badge>Ava</Badge>
          <Badge>Testing-library</Badge>
        </TabContent>
        <TabContent title="Oktana" id={"oktana"} className={styles["tab-container"]}>
          <h3 className={styles["job-title"]}>
            Frontend Engineer{" "}
            <AnchorLink
              href="https://oktana.com/"
              target={"_blank"}
              rel="noreferrer"
              variant="colored"
            >
              @ Oktana
            </AnchorLink>
          </h3>
          <h4>July 2020 - January 2021</h4>

          <ul className="styled-ul">
            <li>
              Collaborated with multiple scrum teams for a large investment platform for
              the FinTech industry
            </li>
            <li>
              Helped migrate legacy React code to modern standards and set a path for
              future development in order to ensure maintainability
            </li>
            <li>
              Developed high-performance widgets used to visualize financial data over
              variable periods of time and a multitude of filters and graphs
            </li>
          </ul>

          <h5>Main technologies</h5>

          <Badge>React</Badge>
          <Badge>Node</Badge>
          <Badge>Typescript</Badge>
          <Badge>Redux</Badge>
          <Badge>React Saga</Badge>
          <Badge>Chart.js</Badge>
        </TabContent>
        <TabContent title="Marvik" id={"marvik"} className={styles["tab-container"]}>
          <h3 className={styles["job-title"]}>
            Full Stack Engineer{" "}
            <AnchorLink
              href="https://marvik.ai/"
              target={"_blank"}
              rel="noreferrer"
              variant="colored"
            >
              @ Marvik
            </AnchorLink>
          </h3>
          <h4>October 2018 - July 2020</h4>
          <p>
            Marvik being a very small startup at the time, I had the opportunity to do a
            little bit of everything across many small/medium projects. From fullstack
            development to DevOps, machine learning and data processing algorithms
          </p>
          <ul className="styled-ul">
            <li>
              Built and shipped a chatbot platform for realtime monitoring and human
              take-over
            </li>
            <li>
              Contributed to building and designing data processing pipelines on embedded
              devices
            </li>
            <li>
              Helped build a large platform that integrates multiple machine learning
              pipelines and algorithms for an integrated and fully-independent solution to
              data gathering, processing and end user communication
            </li>
            <li>Data visualization and analytics</li>
          </ul>

          <h5>Main technologies</h5>

          <Badge>React</Badge>
          <Badge>GoLang</Badge>
          <Badge>Redux</Badge>
          <Badge>MySQL</Badge>
          <Badge>MongoDB</Badge>
          <Badge>React Native</Badge>
          <Badge>Tensorflow.js</Badge>
          <Badge>Python</Badge>
          <Badge>Docker</Badge>
          <Badge>AWS/Azure</Badge>
          <Badge>AWS S3</Badge>
        </TabContent>
      </Tabs>
    </section>
  );
};

export default ExperienceSection;
