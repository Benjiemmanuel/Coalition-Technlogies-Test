import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
