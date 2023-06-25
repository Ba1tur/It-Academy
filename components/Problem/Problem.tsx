import p from './Problem.module.scss'
import {AiTwotoneLike} from "react-icons/ai";
import {IoIosNotifications} from "react-icons/io";
import {MdPeopleAlt} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import {Variants, motion} from "framer-motion";
import {useEffect, useState} from "react";

const topAnimation: Variants = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, delay: custom * 0.4}
    })
}

const leftAnimation: Variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay: custom * 0.4}
    })
}

const Problem = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const position = window.pageYOffset;
            setScrollPosition(position);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.section className={p.problem}
                        initial="hidden"
                        whileInView="visible">

            {
                scrollPosition > 600 ?
                    <span className={p.problem__text}>НЕ ПРОБЛЕМА</span> : null
            }

            <div className="container">
                <motion.h2 custom={1} variants={topAnimation} className={p.problem__title}>
                    ТЫ ЕЩЕ НЕ <span>ЗАПИСАЛСЯ</span> НА ОСНОВЫ ПРОГРАММИРОВАНИЯ?
                </motion.h2>

                <ul className={p.problem__list}>

                    <motion.li
                        custom={2} variants={leftAnimation}
                    >
                        <span style={{background: " #4FD69C"}}>
                            <AiTwotoneLike/>
                            ПОМОЖЕМ ВЫБРАТЬ ПУТЬ НИНДЗЯ , твой язык программирования ждет тебя!
                         </span>
                    </motion.li>

                    <motion.li
                        custom={3} variants={leftAnimation}
                    >
                        <span style={{background: "#37D5F2"}}>
                            <IoIosNotifications/>
                            ПРЕДОСТАВИМ ВСЮ НУЖНУЮ ИНФОРМАЦИЮ ДЛЯ ТВОЕГО ПЕРВОГО ПРИЛОЖЕНИЯ ИЛИ САЙТА :)
                        </span>
                    </motion.li>

                    <motion.li
                        custom={4} variants={leftAnimation}
                    >
                        <span style={{background: "#FC7C5F"}}>
                            <MdPeopleAlt/>
                            ПОСТОЯННАЯ ПОДДЕРЖКА ОТ СЕНСЕЯ, командные работы и веселые приключения в мире программирования, начнем?
                        </span>
                    </motion.li>

                    <motion.li
                        custom={5} variants={leftAnimation}
                    >
                        <span style={{background: "#F75676"}}>
                            <IoCall/>
                            ОСТАВЛЯЙ ЗАЯВКУ И МЫ ОБЯЗАТЕЛЬНО ОТВЕТИМ НА ВСЕ ТВОИ ВОПРОСЫ, КОНСУЛЬТАЦИЯ АБСОЛЮТНО БЕСПЛАТНО!
                        </span>
                    </motion.li>
                </ul>
            </div>
        </motion.section>
    );
};

export default Problem;