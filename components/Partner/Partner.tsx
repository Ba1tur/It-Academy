import p from './Partner.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination  } from "swiper";


const Partner = () => {
    return (
        <section className={p.partners}>
            <div className={p.partners__container}>
                <h2 className={p.partners__title}>
                    наши партнеры
                </h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className={p.partners__box}>
                        <img src='/epam.png' alt="epam"/>
                    </SwiperSlide>

                    <SwiperSlide className={p.partners__box}>
                        <img src='/optima.png' alt="optima"/>
                    </SwiperSlide>

                    <SwiperSlide className={p.partners__box}>
                        <img src="/discovery.png" alt="discovery"/>
                    </SwiperSlide>

                    <SwiperSlide className={p.partners__box}>
                        <img src='/epam.png' alt="epam"/>
                    </SwiperSlide>

                    <SwiperSlide className={p.partners__box}>
                        <img src='/optima.png' alt="optima"/>
                    </SwiperSlide>

                    <SwiperSlide className={p.partners__box}>
                        <img src="/discovery.png" alt="discovery"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Partner;