import React from "react";
import s from "./Header.module.scss";

import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        <a className={s.header__logo} href="#">
          <Image src="/logo.svg" alt="logo footer" width={100} height={200} />
        </a>
        <span className={s.header__icons}>
          <a href="#">
           <HiOutlineLocationMarker/>
          </a>
          <a href="#">
            <AiOutlineAppstore />
          </a>
        </span>
      </nav>
    </header>
  );
};

export default Header;
