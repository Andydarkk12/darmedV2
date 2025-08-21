import minzdrav from "../img/minzdrav.png";
import RB from "../img/RB.png";
import rpnLogo from "../img/rpn-logo.png";

export const Sources = () => {
    return (
        <section className="container">
            <div className="sources">
                <a className="source" href="https://minzdrav.gov.ru" target="_blank" rel="noopener noreferrer">
                    <div className="img">
                        <img src={RB} alt="Минздрав РФ" />
                    </div>
                    <div className="number">
                        <h3>Министерство здравоохранения Российской Федерации</h3>
                        <p>Тел.: +7 495 627-24-00</p>
                    </div>
                </a>

                <a className="source" href="https://minzdrav-rb.ru" target="_blank" rel="noopener noreferrer">
                    <div className="img">
                        <img src={minzdrav} alt="Минздрав РБ" />
                    </div>
                    <div className="number">
                        <h3>Министерство здравоохранения Республики Бурятия</h3>
                        <p>Тел.: +7 (3012) 21-31-25</p>
                    </div>
                </a>

                <a className="source" href="https://rospotrebnadzor.ru" target="_blank" rel="noopener noreferrer">
                    <div className="img">
                        <img src={rpnLogo} alt="Роспотребнадзор" />
                    </div>
                    <div className="number">
                        <h3>Роспотребнадзор</h3>
                        <p>Тел.: +7 (3012) 41-25-74</p>
                    </div>
                </a>
            </div>
        </section>
    );
};