import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FunctionComponent, Key, useState } from "react";
import Button from "../../components/Button";

import styles from "./home.module.scss";

const HomeSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <section className={styles.container} id="home">
      <div>
        <div className={styles["named-avatar"]}>
          <div className={styles.avatar}>
            <Image
              src="/profile.png"
              alt=""
              width={120}
              height={120}
              className={styles.avatar}
            />
          </div>
          <div>
            <h1 className={styles.title}>
              Juan Rebella <br />
              <span className={styles.subtitle}>Software Engineer</span>
            </h1>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles["button-container"]}>
            <span>Jump right in</span>
            <Link href="#about" passHref>
              <Button>My Portfolio</Button>
            </Link>
          </div>

          <div className={styles["button-container"]}>
            <span>On a hurry?</span>
            <a href="/Juan Rebella2022.pdf" target={"_blank"}>
              <Button>
                Download CV (.pdf) <FontAwesomeIcon icon={faDownload} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
