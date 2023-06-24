import React from "react";
import s from "./MentorsSlide.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { MentorsSlideProps } from "@/models/IMentorsSlide";
import { motion } from "framer-motion";

SwiperCore.use([Autoplay]);

const MentorsSlide: React.FC<{ mentorsCardDate: MentorsSlideProps[] }> = ({
  mentorsCardDate,
}) => {
  return (
    <Swiper
      slidesPerView={2}
      className="mentorsSlide"
      loop
      speed={1200}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      breakpoints={{
        886: {
          slidesPerView: 2,
        },
        885: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        10: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }}
    >
      {mentorsCardDate.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <motion.div
              initial="hidden"
              transition={{ duration: 1 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0.7 },
                visible: { scale: 1 },
              }}
              className={s.mentors_slide_block}
            >
              <Image
                className={s.mentors_slide_block__marque}
                src="/marques.svg"
                alt="marques_img"
                width={106}
                height={98}
              />
              <div className={s.mentors_slide__description}>
                <h3>{slide.name}</h3>
                <p>{slide.jobTitle}</p>
              </div>
              <motion.img
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className={s.linkedin}
                src="/linkedin.svg"
                alt="linkedin.svg"
              />
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MentorsSlide;
