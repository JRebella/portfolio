import Link from "next/link";
import { ComponentProps, FunctionComponent, Key, useState } from "react";
import Button from "../../components/Button";
import styles from "./contact.module.scss";

const ContactSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <section className={styles.container} id="contact">
      <h2>Contact Me</h2>

      <Link href="mailto:jrebella96@gmail.com" passHref>
        <Button>Send me an email</Button>
      </Link>
    </section>
  );
};

export default ContactSection;
