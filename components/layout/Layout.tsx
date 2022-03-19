import classNames from "classnames";
import { FunctionComponent } from "react";
import useBooleanState from "../../hooks/useBooleanState";
import useFixedOverlay from "../../hooks/useFixedOverlay";
import Footer from "../../pageComponents/footer/Footer";
import NavBar from "../NavBar/NavBar";
import styles from "./layout.module.scss";

const Layout: FunctionComponent = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useBooleanState(false);
  useFixedOverlay(isMenuOpen);

  return (
    <div className={styles.container}>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div
        className={classNames(styles.content, {
          [styles["content--blur"]]: isMenuOpen,
        })}
      >
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
      </div>
    </div>
  );
};
export default Layout;
