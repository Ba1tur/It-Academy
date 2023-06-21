import m from './Map.module.scss'

const Map = () => {
    const mapURL = "https://yandex.ru/maps/-/CCUoiEv8gA"

    return (
        <section className={m.map}>
            <div className="container">
                <div className={m.map__content}>
                    <span className={m.map__span}>
                    <span>местоположение</span> в <br/>
                    центре города
                </span>
                    <iframe
                        src={mapURL}
                        className={m.map__content_iframe}
                        width="100%"
                        height="500"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Map;