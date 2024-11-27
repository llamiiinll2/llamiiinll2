import { title } from "process";
import React, {memo} from "react";
import IButton from "./input.module.scss"
import styles from "./input.module.scss";
interface IButton {
  children?: any;
  title?: string;
  onClick: () => void;
  isLoading?: boolean;
  error?:any;
}

  

  const Input=( { onClick, children, title, isLoading ,error}: IButton) =>{
  console.log("button","rerender")
  return (
    <button className={styles.input} >
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
export default memo(Input)
