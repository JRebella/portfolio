import classNames from "classnames";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import styles from "./anchorLink.module.scss";

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "accented" | "colored";
}

const AnchorLink: FunctionComponent<AnchorProps> = ({
  className,
  variant = "accented",
  ...props
}) => {
  return <a {...props} className={classNames(className, styles.link, styles[variant])} />;
};

export default AnchorLink;
