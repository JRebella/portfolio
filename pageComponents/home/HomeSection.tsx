import { faAnglesDown, faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FunctionComponent, Key, useState } from "react";
import Button from "../../components/Button";

import styles from "./home.module.scss";

const HomeSection: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <section
      className={classNames(styles.container, "animate__animated  animate__fadeInDown")}
      id="home"
      aria-labelledby="section-home"
    >
      <div />
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
            <h1 className={styles.title} id="section-home">
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

      <FontAwesomeIcon
        icon={faAnglesDown}
        className={classNames(styles["more-arrow"], "animate__animated animate__shakeY ")}
      />
    </section>
  );
};

export default HomeSection;
