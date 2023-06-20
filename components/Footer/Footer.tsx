import React, { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <div>
          <h2>
            <img src="/logo.svg" alt="logo footer" /> IT ACADEMY
          </h2>
          <p>Покори IT-вершины и стань творцом своей судьбы!</p>
        </div>

        <nav>
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
              <a href="#">@it,academy</a>
            </li>
            <li>
              <ul>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <footer className={s.subFooter}>
        <p>© Copyright IT ACADEMY. All Rights Reserved 2023</p>
      </footer>
    </footer>
  );
};

export default Footer;
