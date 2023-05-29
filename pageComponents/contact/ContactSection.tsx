import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ComponentProps, FunctionComponent, Key, useState } from "react";
import Button from "../../components/Button";
import AnchorLink from "../../components/Link/AnchorLink";
import styles from "./contact.module.scss";
import classNames from "classnames";

const ContactSection: FunctionComponent<ComponentProps<"section">> = ({ className }) => {
  return (
    <section
      className={classNames(styles.container, className)}
      id="contact"
      aria-labelledby="section-contact"
    >
      <h2 id="section-contact">Contact Me</h2>
      <p>
        Do you have an interesting project and think I could be a good fit?
        <br />
        Feel free to contact me via email at{" "}
        <AnchorLink href="mailto:jrebella96@gmail.com">jrebella96@gmail.com</AnchorLink>
      </p>

      <ul>
        <li>
          <AnchorLink href="https://www.linkedin.com/in/juanrebella/" target={"_blank"}>
            <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/juanrebella
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="https://github.com/JRebella" target={"_blank"}>
            <FontAwesomeIcon icon={faGithub} /> github.com/JRebella
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="mailto:jrebella96@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> jrebella96@gmail.com
          </AnchorLink>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
