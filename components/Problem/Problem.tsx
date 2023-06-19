import p from './Problem.module.scss'
import {AiFillLike} from "react-icons/ai";
import {IoIosNotifications} from "react-icons/io";
import {MdPeopleAlt} from "react-icons/md";
import {IoCall} from "react-icons/io5";

const Problem = () => {
    return (
        <section className={p.problem}>
            <div className="container">
                <h2 className={p.problem__title}>
                    ТЫ ЕЩЕ НЕ <span>ЗАПИСАЛСЯ</span> НА ОСНОВЫ ПРОГРАММИРОВАНИЯ?
                </h2>

                <div className={p.problem}>
                    <span>
                        <AiFillLike/>
                        ПОМОЖЕМ ВЫБРАТЬ ПУТЬ НИНДЗЯ , твой язык программирования ждет тебя!
                    </span>

                    <span>
                        <IoIosNotifications/>
                        ПРЕДОСТАВИМ ВСЮ НУЖНУЮ ИНФОРМАЦИЮ ДЛЯ ТВОЕГО ПЕРВОГО ПРИЛОЖЕНИЯ ИЛИ САЙТА :)
                    </span>

                    <span>
                        <MdPeopleAlt/>
                        ПОСТОЯННАЯ ПОДДЕРЖКА ОТ СЕНСЕЯ, командные работы и веселые приключения в мире программирования, начнем?
                    </span>

                    <span>
                        <IoCall/>
                        ОСТАВЛЯЙ ЗАЯВКУ И МЫ ОБЯЗАТЕЛЬНО ОТВЕТИМ НА ВСЕ ТВОИ ВОПРОСЫ, КОНСУЛЬТАЦИЯ АБСОЛЮТНО БЕСПЛАТНО!
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Problem;