import React, { FC } from "react";
import s from "./ConnectForm.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";


const ConnectForm: FC = () => {
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
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            Воплоти в жизнь мечты, с помощью кода
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
            className={s.connect_form_section_decstop_arrow}
            src="/Arrow 1.svg"
            alt="arrow.svg"
          />
        </div>
        <motion.form
          initial={{ opacity: 0, y: -130 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.3 } }}
          className={s.connect_form_section_form}
        >
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <Image
            className={s.connect_form_section_form__mobile_arrow}
            src="/Arrow 2.svg"
            alt="bolos"
            width={36}
            height={107}
          />
          <button>Contact Us</button>
        </motion.form>
      </div>
    </section>
  );
};

export default ConnectForm;
