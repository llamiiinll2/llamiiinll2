import { title } from "process";
import React, { memo } from "react";

import IButton from "./button.types";
import styles from "./button.module.scss";

const Button = ({ onClick, children, title, isLoading }: IButton) => {
  console.log("button", "rerender");
  return (
    <button className={styles.button} type="submit">
      <></>
      {isLoading ? (
        <span>"Loading..."</span>
      ) : children ? (
        children
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};
export default memo(Button);
