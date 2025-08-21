import { servicesList } from "./servicesList";
import { Card } from "./cards";
export const Services = () =>{
    return(
        <section className="services" id="services">
            <div className="container">
                <div className="text">
                    <h1>Виды УЗИ исследований</h1>
                    <p>Полный спектр ультразвуковых исследований на современном оборудовании с высокой точностью диагностики</p>
                </div>
                <div className="cards">
                    {servicesList.map((card)=><Card key={card} card={card}/>)}
                </div>
            </div>
        </section>
    )
}