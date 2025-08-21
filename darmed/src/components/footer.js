import logo from '../img/logo.png';
export const Footer = () =>{
    return(
        <footer>
            <div className="container" id="about">
                <div className='footerBox'>
                <div className="block">
                    <img src={logo} alt="Логотип" />
                    <p>Современная диагностика на оборудовании экспертного класса</p>
                </div>
                <div className="block">
                    <h4>Документы</h4>
                    <a href='http://darmed03.ru/docs/EGRUL.pdf'>ЕГРЮЛ ООО "Дармед"</a><br/>
                    <a href='http://darmed03.ru/docs/lic.pdf'>Лицензия на осуществление медицинской помощи</a><br/>
                    <a href='http://darmed03.ru/docs/prava.pdf'>Права и обязанности граждан в сфере охраны здоровья</a><br/>
                    <a href='http://darmed03.ru/docs/pravila.pdf'>Правила предоставления платных медицинских услуг</a><br/>
                    <a href='http://darmed03.ru/docs/nadzorOrg.pdf'>Контакты надзорных органов</a><br/>
                </div>
                <div className="block">
                    <h4>Контакты</h4>
                    <p>г.Улан-Удэ ул. Бабушкина 17, Улан-Удэ</p>
                    <p>+7 (914) 051-14-14</p>
                    <p>clinika.darmed@mail.ru</p>
                    <p>С понедельника до субботы
                    С 9:00 до 18:00</p>
                </div>
                </div>
                <div className='under'>
                    <p>© 2025 ООО Дармед. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}