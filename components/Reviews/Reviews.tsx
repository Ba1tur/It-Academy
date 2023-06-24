import React from "react";
import s from "./Reviews.module.scss";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="container">
      <div className={s.reviews_section}>
        <h1>
          Отзывы наших <br /> студентов
        </h1>
        <div className={s.reviews_section__video_block}>
          <div className={s.reviews_section__video_block__top}>
            <div className={s.reviews_section__video_block__top_block}>
              <iframe
                src="https://player.vimeo.com/video/817163669?h=b613d83d92"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
              <Image
                className={s.reviews_section__video_block__top__javascript_left}
                src="/javascript.svg"
                alt="js.svg"
                width={144}
                height={135}
              />
            </div>
            <div className={s.reviews_section__video_block__top_block}>
              <iframe
                src="https://player.vimeo.com/video/817163669?h=b613d83d92"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
              <Image
                className={
                  s.reviews_section__video_block__top__javascript_right
                }
                src="/javascript.svg"
                alt="js.svg"
					 
                width={144}
                height={135}
              />
            </div>
          </div>
          <div className={s.reviews_section__video_block__logo}>
            <Image
              width={195}
              height={163}
              src="/it-academy.png"
              alt="/it-academy.png"
            />
          </div>
          <div className={s.reviews_section__video_block__button}>
            <button>
              ПОДАТЬ ЗАЯВКУ
              <Image
                src="/it-academy.png"
                alt="it-academy.png"
                width={49}
                height={47}
              />
            </button>
          </div>
          <div className={s.reviews_section__video_block__bottom}>
            <div className={s.reviews_section__video_block__top_block}>
              <iframe
                src="https://player.vimeo.com/video/817163669?h=b613d83d92"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
              <Image
                className={s.reviews_section__video_block__top__javascript_left}
                src="/javascript.svg"
                alt="js.svg"
                width={144}
                height={135}
              />
            </div>
            <div className={s.reviews_section__video_block__top_block}>
              <iframe
                src="https://player.vimeo.com/video/817163669?h=b613d83d92"
                width="640"
                height="360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
              <Image
                className={
                  s.reviews_section__video_block__top__javascript_right
                }
                src="/javascript.svg"
                alt="js.svg"
                width={144}
                height={135}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
