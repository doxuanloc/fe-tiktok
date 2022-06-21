import styles from "./Button.module.scss";
// import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  children,
  onClick,
  text,
  leftIcon,
  hover,
  line,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    hover,
    line,
  });

  return (
    <a className={classes} {...props} href={to}>
      {leftIcon && <span className={styles["icon"]}>{leftIcon}</span>}
      <span className={styles["title"]}>{children}</span>
    </a>
  );
}

export default Button;
