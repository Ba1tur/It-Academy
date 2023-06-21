import p from './Problem.module.scss'
import {AiTwotoneLike} from "react-icons/ai";
import {IoIosNotifications} from "react-icons/io";
import {MdPeopleAlt} from "react-icons/md";
import {IoCall} from "react-icons/io5";

const Problem = () => {
    return (
        <section className={p.problem}>

            <span className={p.problem__text}>НЕ ПРОБЛЕМА</span>

            <div className="container">
                <h2 className={p.problem__title}>
                    ТЫ ЕЩЕ НЕ <span>ЗАПИСАЛСЯ</span> НА ОСНОВЫ ПРОГРАММИРОВАНИЯ?
                </h2>

                <ul className={p.problem__list}>

                    <li>
                        <span style={{background: " #4FD69C"}}>
                            <AiTwotoneLike/>
                            ПОМОЖЕМ ВЫБРАТЬ ПУТЬ НИНДЗЯ , твой язык программирования ждет тебя!
                         </span>
                    </li>

                    <li>
                        <span style={{background: "#37D5F2"}}>
                            <IoIosNotifications/>
                            ПРЕДОСТАВИМ ВСЮ НУЖНУЮ ИНФОРМАЦИЮ ДЛЯ ТВОЕГО ПЕРВОГО ПРИЛОЖЕНИЯ ИЛИ САЙТА :)
                        </span>
                    </li>

                    <li>
                        <span style={{background: "#FC7C5F"}}>
                            <MdPeopleAlt/>
                            ПОСТОЯННАЯ ПОДДЕРЖКА ОТ СЕНСЕЯ, командные работы и веселые приключения в мире программирования, начнем?
                        </span>
                    </li>

                    <li>
                        <span style={{background: "#F75676"}}>
                            <IoCall/>
                            ОСТАВЛЯЙ ЗАЯВКУ И МЫ ОБЯЗАТЕЛЬНО ОТВЕТИМ НА ВСЕ ТВОИ ВОПРОСЫ, КОНСУЛЬТАЦИЯ АБСОЛЮТНО БЕСПЛАТНО!
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Problem;