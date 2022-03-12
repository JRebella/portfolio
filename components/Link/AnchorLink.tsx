import classNames from "classnames";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import styles from "./anchorLink.module.scss";

const AnchorLink: FunctionComponent<ComponentPropsWithoutRef<"a">> = ({
  className,
  ...props
}) => {
  return <a {...props} className={classNames(className, styles.link)} />;
};

export default AnchorLink;
