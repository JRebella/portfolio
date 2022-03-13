import classNames from "classnames";
import Link from "next/link";
import { FunctionComponent } from "react";
import useScroll from "../../hooks/UseScroll";
import Footer from "../../pageComponents/footer/Footer";

import styles from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>

      <aside className={styles["banner--left"]}>JUAN REBELLA - SOFTWARE ENGINEER</aside>
      <aside className={styles["banner--right"]}>JUAN REBELLA - SOFTWARE ENGINEER</aside>
    </div>
  );
};

const NavBar: FunctionComponent = () => {
  const { state } = useScroll();
  return (
    <nav className={classNames(styles.navbar, styles[`navbar--${state}`])}>
      <Link href={"/"} passHref>
        <div className={styles["jr-icon"]}>JR</div>
      </Link>
      <ol className={styles["link-list"]}>
        <li>
          <Link href={"/#about"}>About</Link>
        </li>
        <li>
          <Link href={"/#experience"}>Experience</Link>
        </li>
        {/* <li>
          <Link href={"#projects"}>Projects</Link>
        </li> */}
        <li>
          <Link href={"/#contact"}>Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Layout;
