import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juan Rebella | Software Engineer</title>
        <meta
          name="Juan Rebella Portfolio"
          content="A professional portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Portfolio</h1>
      </main>
    </div>
  );
};

export default Home;
