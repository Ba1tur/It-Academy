import React, {  FC, useEffect, useRef, useState } from "react";
import s from "./Statistics.module.scss";

const Statistics: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight, pageYOffset } = window;

      if (
        ref.current &&
        ref.current.offsetTop <= innerHeight + pageYOffset - 50
      ) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  
  return (
    <section className="container">
      <div className={s.statistics_section} ref={ref}>
        {inView && (
          <div className={s.statistics_block}>
            <div className={s.statistics__number}>
					<div className={s.statistics__number__block}>
						<h3 className={`${s.num} ${s.num1}`}></h3>
						<h3>+</h3>
					</div>
              
              <p>Лет на рынке</p>
            </div>
            <div className={s.statistics__number}>
					<div className={s.statistics__number__block}>
						<h3 className={`${s.num} ${s.num2}`}></h3>
						<h3>+</h3>
					</div>
              <p>
                успешно выпущенных <br /> студентов
              </p>
            </div>
            <div className={s.statistics__number}>
					<div className={s.statistics__number__block}>
						<h3 className={`${s.num} ${s.num3}`}></h3>
						<h3>%</h3>
					</div>
              
              <p>
                Гарантии <br /> трудоустройства
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Statistics;
