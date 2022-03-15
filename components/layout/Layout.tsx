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

      <aside
        className={classNames(
          styles["banner--left"],
          "animate__animated animate__fadeInUp"
        )}
      >
        JUAN REBELLA - SOFTWARE ENGINEER
      </aside>
      <aside
        className={classNames(
          styles["banner--right"],
          "animate__animated animate__fadeInUp"
        )}
      >
        JUAN REBELLA - SOFTWARE ENGINEER
      </aside>

      <div className={styles["mobile-warning"]}>
        <dialog>
          Attention, the mobile version is still under construction. Please use the
          desktop version for now!
        </dialog>
      </div>
    </div>
  );
};

const NavBar: FunctionComponent = () => {
  const { state } = useScroll(80);
  return (
    <nav className={classNames(styles.navbar, styles[`navbar--${state}`])}>
      <Link href={"/"} passHref>
        <div
          className={classNames(
            styles["jr-icon"],
            "animate__animated  animate__fadeInDown"
          )}
        >
          JR
        </div>
      </Link>
      <ol
        className={classNames(
          styles["link-list"],
          "animate__animated  animate__fadeInDown"
        )}
      >
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
