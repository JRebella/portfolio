import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import AnchorLink from "../components/Link/AnchorLink";
import styles from "./about.module.scss";
import Badge from "../components/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import ContactSection from "../pageComponents/contact/ContactSection";

const Compact: NextPage = () => {
  return (
    <div className="flex flex-col w-full items-center pt-0">
      <Head>
        <title>Juan Rebella | Software Engineer</title>
        <meta name="Juan Rebella Portfolio" content="A professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section
        className={classNames(
          styles.container,
          "animate__animated  animate__fadeInDown",
          "text-sm"
        )}
        id="about-this-portfolio"
      >
        <div>
          <div>
            <h1>Juan Rebella - Software Engineer</h1>

            <div className="flex justify-between mb-6">
              <div>
                <AnchorLink href="mailto:jrebella96@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> jrebella96@gmail.com
                </AnchorLink>
              </div>
              <div>
                <AnchorLink
                  href="https://www.linkedin.com/in/juanrebella/"
                  target={"_blank"}
                >
                  <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/juanrebella
                </AnchorLink>
              </div>
              <div>
                <AnchorLink href="https://www.juanrebella.dev/" target={"_blank"}>
                  <FontAwesomeIcon icon={faLink} /> jrebella.dev
                </AnchorLink>
              </div>
            </div>

            <h2 className="mt-16">About me</h2>

            <p>
              Hey there, my name is <span className="text-accent">Juan</span>. I&apos;m a{" "}
              <span className="text-accent">software engineer from Uruguay</span> and I
              specialize in Frontend development with{" "}
              <span className="text-accent">React.js.</span>
            </p>

            <p>
              I kickstarted my professional career as a full stack developer at a small
              software factory. This role enabled me to undertake diverse challenging
              projects for various clients, allowing me to gain field experience across a
              wide array of technologies and domains, including DevOps and Machine
              Learning.
            </p>

            <p>
              After having hands-on experience with the multitude of areas of software
              development, I&apos;ve specialized myself in Frontend roles, working in
              medium to large projects in various industries. Including finance, education
              and healthcare.
            </p>

            <p>
              Nowadays I&apos;m the{" "}
              <span className="text-accent">Technical Lead for an</span>
              <span className="text-accent">
                {" "}
                American company in the Health Industry.
              </span>
            </p>
          </div>

          <div className="mt-16">
            <h2>Work Experience</h2>
            <div className="flex flex-col gap-8">
              <ExpExpressable />
            </div>
            <div className="flex flex-col gap-8 break-before-page">
              <ExpNorton />
              <ExpBrightplan />
              <ExpMarvik />
            </div>
          </div>

          <ContactSection className="mt-16" />
        </div>
      </section>
    </div>
  );
};

const ExpExpressable = () => {
  return (
    <div>
      <h3 className={styles["job-title"]}>
        Tech Lead{" "}
        <AnchorLink
          href="https://www.expressable.io/"
          target={"_blank"}
          rel="noreferrer"
          variant="colored"
        >
          @ Expressable
        </AnchorLink>
      </h3>
      <h4>May 2022 - Present</h4>

      <ul className="styled-ul">
        <li>
          Frontend Technical Lead on a team of ~15 engineers with multiple interconnected
          applications for the American Health industry. Acting as a support role to aid
          the rest of the team, provide guidance, design technical architectures and
          patterns
        </li>
        <li>
          Define and maintain quality standards with the main objective of increasing
          maintainability of the codebases. Standardize technologies across applications.
          Set up tooling to enforce code quality, unit test coverage, etc.
        </li>

        <li>
          Study how the different areas of the team communicate and work together (QA,
          design, product, development), identify bottlenecks and inefficiencies in order
          to devise improved engineering processes and increase overall productivity
        </li>
      </ul>

      <Badge>React</Badge>
      <Badge>Typescript</Badge>
      <Badge>DevOps</Badge>
      <Badge>Accessibility</Badge>
      <Badge>TailwindCSS</Badge>
      <Badge>Github Actions</Badge>
      <Badge>Jest</Badge>
    </div>
  );
};

const ExpNorton = () => {
  return (
    <div>
      <h3 className={styles["job-title"]}>
        Frontend Engineer{" "}
        <AnchorLink
          href="https://wwnorton.com/"
          target={"_blank"}
          rel="noreferrer"
          variant="colored"
        >
          @ W.W. Norton
        </AnchorLink>
      </h3>
      <h4>January 2021 - May 2022</h4>

      <ul className="styled-ul">
        <li>
          Frontend lead engineer for a fully-accessible platform in the EdTech industry.
          Large data visualization and manipulation within a modern UI and excellent UX
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
            design system with a focus on accessibility. Working closely with UX/UI
            experts
          </div>
        </li>
      </ul>

      <Badge>React</Badge>
      <Badge>Next.js</Badge>
      <Badge>Typescript</Badge>
      <Badge>Accessibility</Badge>
      <Badge>Sass</Badge>
      <Badge>Storybook</Badge>
      <Badge>Jest</Badge>
      <Badge>Ava</Badge>
      <Badge>Testing-library</Badge>
    </div>
  );
};

const ExpBrightplan = () => {
  return (
    <div>
      <h3 className={styles["job-title"]}>
        Frontend Engineer{" "}
        <AnchorLink
          href="https://www.brightplan.com/"
          target={"_blank"}
          rel="noreferrer"
          variant="colored"
        >
          @ BrightPlan
        </AnchorLink>
      </h3>
      <h4>July 2020 - January 2021</h4>

      <ul className="styled-ul">
        <li>
          Collaborated with multiple scrum teams for a large investment platform for the
          FinTech industry
        </li>
        <li>
          Helped migrate legacy React code to modern standards and set a path for future
          development in order to ensure maintainability
        </li>
        <li>
          Developed high-performance widgets and graphs used to visualize large financial
          data over variable periods of time with a multitude of filters
        </li>
      </ul>

      <Badge>React</Badge>
      <Badge>Node</Badge>
      <Badge>Typescript</Badge>
      <Badge>Redux</Badge>
      <Badge>Redux-Saga</Badge>
      <Badge>Chart.js</Badge>
    </div>
  );
};

const ExpMarvik = () => {
  return (
    <div>
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
        Marvik being a very small startup company at the time, I had the opportunity to do
        a little bit of everything across many small/medium sized projects. From fullstack
        development to DevOps, machine learning and data processing pipelines
      </p>
      <ul className="styled-ul">
        <li>
          Built an administrative platform for realtime monitoring and human take-over of
          chatbots
        </li>
        <li>
          Contributed to building and designing data processing pipelines on embedded
          devices
        </li>
        <li>Data visualization and analytics</li>
      </ul>

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
    </div>
  );
};

export default Compact;
