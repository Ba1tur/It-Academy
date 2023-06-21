import React from "react";
import s from "./Mentors.module.scss";
import MentorsSlide from "../MentorsSlide/MentorsSlide";
import { mentorsCardDate } from "@/constants/MentorsCard";

const Mentors = () => {
  return (
    <section className={s.mentors_background}>
      <div className="container" style={{background: 'none'}}>
        <div className={s.mentors_section}>
          <h1>Наши ментора</h1>
          <div className={s.mentors_section__line}></div>
			 <div className={s.mentors_section__slide}>
				<MentorsSlide mentorsCardDate={mentorsCardDate} />
			 </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
