import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import styles from "./home.module.scss";
import Link from "next/link";
import AboutSection from "../pageComponents/about/aboutSection";
import BuiltWith from "../pageComponents/home/builtWith";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Juan Rebella | Software Engineer</title>
        <meta
          name="Juan Rebella Portfolio"
          content="A professional portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
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
                <h1 className={styles.title}>
                  Juan Rebella <br />
                  <span className={styles.subtitle}>Software Engineer</span>
                </h1>
              </div>
            </div>

            <div className={styles.buttons}>
              <div className={styles["button-container"]}>
                <span>Jump right in</span>
                <Button>My Portfolio</Button>
              </div>

              <div className={styles["button-container"]}>
                <span>On a hurry?</span>
                <Link href="/Juan Rebella2022.pdf" passHref>
                  <Button>
                    Download CV (.pdf) <FontAwesomeIcon icon={faDownload} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <BuiltWith />
        </section>

        <AboutSection />

        <section>
          <h2>Experience @TODO</h2>
        </section>
      </main>
    </>
  );
};

export default Home;
