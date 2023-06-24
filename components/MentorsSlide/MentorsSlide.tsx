import React from "react";
import s from "./MentorsSlide.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Autoplay , Navigation} from "swiper";
import Image from "next/image";
import { MentorsSlideProps } from "@/models/IMentorsSlide";

SwiperCore.use([Autoplay]);

const MentorsSlide: React.FC<{ mentorsCardDate: MentorsSlideProps[] }> = ({
  mentorsCardDate,
}) => {
  return (
    <Swiper
      slidesPerView={2}
      className="mentorsSlide"
      loop
      modules={[Pagination , Navigation]}
      pagination={{ clickable: true }}
    >
      {mentorsCardDate.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className={s.mentors_slide_block}>
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
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MentorsSlide;
