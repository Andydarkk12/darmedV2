export const Main = () =>{
        const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }}
    return(
        <section className="main">
            <div className="semitransparent">
                <div className="container">
                    <div className="presentation">
                        <h5>Современная</h5>
                        <h5><span  className="goldLetters">УЗИ диагностика</span></h5><br/>
                        <p>Точные исследования на оборудовании экспертного класса.<br/> Опытные врачи, комфортная атмосфера и результаты в день обращения.</p>
                        <div className="buttons">
                            <button onClick={()=>scrollToSection('appointment')}>Записаться на прием</button>

                            <button onClick={()=>scrollToSection('priceList')} className="transButton">Узнать цены</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}