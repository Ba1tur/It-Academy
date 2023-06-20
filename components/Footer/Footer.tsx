import React, { FC } from "react";
import s from "./Footer.module.scss";

import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <div className={s.footer__introduction}>
          <div className={s.footer__logoTitle}>
            <div><Image src="/logo.svg" alt="logo footer" width={30} height={30}/></div> <h2>IT ACADEMY</h2>
          </div>
          <p className={s.footer__description}>
            Покори IT-вершины и стань творцом <br /> своей судьбы!
          </p>
        </div>

        <nav className={s.footer__nav}>
          <ul className={s.footer__list}>
            <li className={s.footer__title}>Pages</li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Сервисы</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
          </ul>

          <ul className={s.footer__list}>
            <li className={s.footer__title}>Services</li>
            <li>
              <a href="#">Web Platform</a>
            </li>
            <li>
              <a href="#">Mobile Apps</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>

          <ul className={s.footer__list}>
            <li className={s.footer__title}>Contacts</li>
            <li>
              <a href="#">it.academy@gmail.com</a>
            </li>
            <li>
              <a href="#">@it.academy</a>
            </li>
            <li>
              <ul className={s.footer__social}>
                <li>
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlinePhone />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineLike />
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className={s.footer__list_clone}>
            <div className={s.footer__flex}>
              <b>Contacts</b>
              <div className={s.footer__email}>
                <a href="#">it.academy@gmail.com</a>
                <a href="#">@it.academy</a>
              </div>
            </div>
            <ul className={s.footer__social}>
              <li>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlinePhone />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLike />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <footer className={s.subFooter}>
        <p>© Copyright IT ACADEMY. All Rights Reserved 2023</p>
      </footer>
    </footer>
  );
};

export default Footer;
