import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
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
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"#about"}>Experience</Link>
        </li>
        <li>
          <Link href={"#experience"}>Projects</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Layout;
