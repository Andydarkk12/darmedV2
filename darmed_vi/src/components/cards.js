export const Card = ({card})=>{
        const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }}
    return(
        <div className="card">
            <div className="iconSpace">
                {card.icon}
            </div>
            <h3>{card.name}</h3>
            <p>{card.desc}</p>
            <div className="buttonSpace">
                <span className="price">
                    от {card.price}₽
                </span>
                <button onClick={()=>scrollToSection('appointment')}>Записаться</button>
            </div>
        </div>
    )
}