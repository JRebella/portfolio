import {
  faFontAwesome,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FunctionComponent } from "react";

import NextJsLogo from "../../public/logo-nextjs.svg";
import VercelLogo from "../../public/logo-vercel.svg";

import styles from "./builtWith.module.scss";

const BuiltWith: FunctionComponent<ComponentProps<"section">> = () => {
  return (
    <Link href="/about-this-portfolio" passHref>
      <div className={styles.container}>
        <div>Built with</div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faReact} />
          <VercelLogo className="svg-inline--fa" />

          <NextJsLogo className="svg-inline--fa" />
        </div>
      </div>
    </Link>
  );
};

export default BuiltWith;
