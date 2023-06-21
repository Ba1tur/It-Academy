import React from "react";
import s from "./Price.module.scss";
import PriceCard from "../PriceCard/PriceCard";
import { postCardDate } from "../constants/PostCard";
import { PriceCardProps } from "@/models/IPriceCard";


const Price = () => {
  return (
    <div className={s.price_background}>
      <section className="container" style={{ background: "none" }}>
        <div className={s.price_section}>
          <h1>СТОИМОСТЬ ТВОЕГО ОБУЧЕНИЯ:</h1>
          <div className={s.price_section__block}>
            <PriceCard postCardDate={postCardDate} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
