import Link from "next/link";
import { FunctionComponent } from "react";
import Footer from "../../pageComponents/footer/Footer";

import styles from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>

      <aside className={styles["aside--left"]}>JUAN REBELLA - SOFTWARE ENGINEER</aside>
      <aside className={styles["aside--right"]}>JUAN REBELLA - SOFTWARE ENGINEER</aside>
    </>
  );
};

const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} passHref>
        <div className={styles["jr-icon"]}>JR</div>
      </Link>
      <ol className={styles["link-list"]}>
        <li>
          <Link href={"#about"}>About</Link>
        </li>
        <li>
          <Link href={"#experience"}>Experience</Link>
        </li>
        <li>
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Layout;
