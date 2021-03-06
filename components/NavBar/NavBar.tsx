import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Link from "next/link";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import useScroll from "../../hooks/UseScroll";
import { CSSTransition, Transition } from "react-transition-group";

import styles from "./navbar.module.scss";

type NavBarProps = ComponentPropsWithoutRef<"nav"> & {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const NavBar: FunctionComponent<NavBarProps> = ({ isMenuOpen, toggleMenu, ...props }) => {
  const { state } = useScroll(80);

  return (
    <nav {...props}>
      <div className={classNames(styles.navbar, styles[`navbar--${state}`])}>
        <Link href={"/"} passHref>
          <div
            className={classNames(
              styles["jr-icon"],
              "animate__animated animate__fadeInDown"
            )}
          >
            JR
          </div>
        </Link>
        <ol
          className={classNames(
            styles["link-list"],
            "animate__animated animate__fadeInDown"
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

        <button className={styles["icon-button"]} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <Transition timeout={500} in={isMenuOpen} unmountOnExit>
        <div className={styles["menu-wrapper"]}>
          <button className={styles["menu-outside"]} onClick={toggleMenu} />
          <CSSTransition
            timeout={500}
            in={isMenuOpen}
            classNames={{
              exitActive: "animate__animated animate__fadeOutRight",
            }}
          >
            <aside
              className={classNames(
                styles["menu-overlay"],
                "animate__animated animate__fadeInRight"
              )}
            >
              <button className={styles["icon-button"]} onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <ol
                className={classNames(styles["link-list"], styles["link-list--mobile"])}
              >
                <li onClick={toggleMenu}>
                  <Link href={"/#about"}>About</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link href={"/#experience"}>Experience</Link>
                </li>
                {/* <li onClick={toggleMenu}>
                <Link href={"#projects"}>Projects</Link>
              </li> */}
                <li onClick={toggleMenu}>
                  <Link href={"/#contact"}>Contact</Link>
                </li>
              </ol>
            </aside>
          </CSSTransition>
        </div>
      </Transition>
    </nav>
  );
};

export default NavBar;
