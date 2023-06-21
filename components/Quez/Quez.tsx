import q from './Quez.module.scss';

const Quez = () => {
    return (
        <section className={q.quez}>
                <div className={q.quez__content}>
                    <h2 className={q.quez__title}>остались вопросы?</h2>

                    <span className={q.quez__content_span}></span>

                    <p className={q.quez__subtitle}>
                        Получите ответы на все интересующие <br/>
                        вас вопросы в считанные секунды!
                    </p>

                    <button className={q.quez__btn}>
                        СВЯЗАТЬСЯ <br/>
                        С НАМИ
                    </button>
                </div>
        </section>
    );
};

export default Quez;