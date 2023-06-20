import React from "react";
import s from "./ConnectForm.module.scss";
import CustomInput from "../Ui/CustomInput/CustomInput";
import Image from "next/image";

const ConnectForm: React.FC = () => {
  return (
    <section className="container">
      <div className={s.connect_form_section}>
        <Image
          className={s.connect_form_section__left_box}
          src="/box.svg"
          alt="box.svg"
          width={148}
          height={145}
        />
        <Image
          className={s.connect_form_section__right_box}
          src="/box.svg"
          alt="box.svg"
          width={148}
          height={145}
        />
        <div className={s.connect_form_section__title_block}>
          <h1>Воплоти в жизнь мечты, с помощью кода</h1>
          <Image
            className={s.connect_form_section_decstop_arrow}
            src="/Arrow 1.svg"
            alt="arrow.svg"
            width={223}
            height={32}
          />
        </div>
        <div className={s.connect_form_section_form}>
          <CustomInput placeholder="Your name" />
          <CustomInput placeholder="Phone number" />
          <CustomInput placeholder="Email" />
          <Image
            className={s.connect_form_section_form__mobile_arrow}
            src="/Arrow 2.svg"
            alt="bolos"
            width={36}
            height={107}
          />
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default ConnectForm;
