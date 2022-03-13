import { faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ComponentProps, FunctionComponent } from "react";
import NextJsLogo from "../../public/logo-nextjs.svg";
import VercelLogo from "../../public/logo-vercel.svg";
import styles from "./footer.module.scss";

const Footer: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <Link href="/about" passHref>
      <div className={styles.container}>
        <div>By Juan Rebella, built with</div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faSass} />
          <NextJsLogo className="svg-inline--fa" />
          <VercelLogo className="svg-inline--fa" />
        </div>
      </div>
    </Link>
  );
};

export default Footer;
