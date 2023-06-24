import React from "react";
import s from "./PriceCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import Image from "next/image";
import { PriceCardProps } from "@/models/IPriceCard";
import { motion } from "framer-motion";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Autoplay]);



const PriceCard: React.FC<{ postCardDate: PriceCardProps[] }> = ({
  postCardDate,
}) => {
  return (
    <>
      <Swiper
        className="priceCard"
        slidesPerView={3}
        speed={1200}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          1115: {
            slidesPerView: 3,
          },
          1112: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 2,
          },
          749: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {postCardDate.map((card: PriceCardProps) => {
          return (
            <SwiperSlide key={card.id}>
              <motion.div
                initial="hidden"
                transition={{ duration: 1 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0.7 },
                  visible: { scale: 1 },
                }}
                className={s.price_card}
              >
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1.3 },
                  }}
                  variants={{
                    visible: {y: 0 , opacity: 1 }
                  }}
                  className={s.price_card__top_img}
                >
                  <img src="/top_item.svg" alt="s" />
                </motion.div>
                <div className={s.price_card___block}>
                  <div className={s.price_card__block__header}>
                    <img src={card.img} alt="mobile.svg" />
                    <h2>{card.title}</h2>
                  </div>
                  {card.description.map((desc, index) => (
                    <div key={index} className={s.price_card__block__main}>
                      <p>{desc}</p>
                      <Image
                        src="/check-mark.svg"
                        alt="check-mark.svg"
                        width={18}
                        height={19}
                      />
                    </div>
                  ))}
                  <h5>{card.price}</h5>
                </div>
                <button>ПОДАТЬ ЗАЯВКУ</button>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PriceCard;
