import React, { FC } from "react";
import s from "./Mentors.module.scss";
import MentorsSlide from "../MentorsSlide/MentorsSlide";
import { mentorsCardDate } from "@/constants/MentorsCard";
import Image from "next/image";
import { motion } from "framer-motion";

type Ballons = {
  id: number;
  class: string;
};

const Mentors : FC = () => {

  const imgDate: Ballons[] = [
    {
      id: 1,
      class: s.first_ballon,
    },
    {
      id: 2,
      class: s.second_ballon,
    },
    {
      id: 3,
      class: s.third_ballon,
    },
    {
      id: 4,
      class: s.four_ballon,
    },
  ];

  return (
    <section className={s.mentors_background}>
      <div className="container" style={{ background: "none" }}>
        <div className={s.mentors_section}>
          <h1>Наши ментора</h1>
          <Image
            className={s.mentors_section__line}
            src="/line.svg"
            alt="line.svg"
            width={410}
            height={4}
          />
          <div className={s.mentors_section__slide}>
            <MentorsSlide mentorsCardDate={mentorsCardDate} />
          </div>
        </div>
      </div>
      {imgDate.map((img) => 
          <motion.img
            key={img.id}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={img.class}
            src="/Sphere-Blue-Glossy.svg"
            alt="bollon.svg"
          />
      )}
    </section>
  );
};

export default Mentors;
