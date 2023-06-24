import React from "react";
import s from "./Price.module.scss";
import PriceCard from "../PriceCard/PriceCard";
import { postCardDate } from "../../constants/PostCard";
import { motion } from "framer-motion";

const Price = () => {
  return (
    <div className={s.price_background}>
      <section className="container" style={{ background: "none" }}>
        <div className={s.price_section}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            СТОИМОСТЬ ТВОЕГО ОБУЧЕНИЯ:
          </motion.h1>
          <div className={s.price_section__block}>
            <PriceCard postCardDate={postCardDate} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
