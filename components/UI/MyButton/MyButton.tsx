import React, { FC, ReactNode } from "react";
import s from "./MyButton.module.scss";

interface IMyButton {
  children: ReactNode;
}

const MyButton: FC<IMyButton> = ({ children }) => {
  return (
    <div className={s.myButton}>
      <button>{children}</button>
    </div>
  );
};

export default MyButton;
