import React, { FC } from "react";
import s from "./Hero.module.scss";

import MyButton from "../UI/MyButton/MyButton";

const Hero: FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero__left}>
        <h1>
          Начни свой <span>путь</span> <br /> программирования <br /> вместе с{" "}
          <br />
          <span>IT ACADEMY</span>
        </h1>
      <MyButton>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</MyButton>
      </div>
      <div className={s.hero__right}></div>
    </section>
  );
};

export default Hero;
