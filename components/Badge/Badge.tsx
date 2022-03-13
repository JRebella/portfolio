import classNames from "classnames";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import styles from "./badge.module.scss";

const Badge: FunctionComponent<ComponentPropsWithoutRef<"span">> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames(className, styles.badge)}>
      <span {...props} />
    </div>
  );
};

export default Badge;
