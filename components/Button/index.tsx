import classNames from "classnames";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  FunctionComponent,
} from "react";

import styles from "./button.module.scss";

const Button: FunctionComponent<ComponentPropsWithoutRef<"button">> = ({
  className,
  ...props
}) => {
  return <button {...props} className={classNames(className, styles.button)} />;
};

export default Button;
