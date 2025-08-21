import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { Map } from "./map"
export const Contacts = () =>{
    return(
        <section className="container">
            <h1>Контакты</h1>

            <div className="contactBox">
                <div className="contacts" id="contacts">

            <h2>Адрес</h2><br></br>
            <span>ул. Бабушкина 17, Улан-Удэ</span>
            <h2>Колл-центр</h2><br></br>
            <span>+7 (914) 051-14-14</span>
            <h2>Почта</h2><br></br>
            <span>clinika.darmed@mail.ru</span>
            <h2>График работы</h2><br></br>
            <span>С понедельника до субботы<br></br>
            С 9:00 до 18:00</span>
            <h2>Мессенджеры и соцсети</h2><br></br>
            <span><a target="_blank" href="https://t.me/darmed_03"><FaTelegram className="telegram"/></a> <a target="_blank" href="https://wa.me/+791405114143"><FaWhatsapp className="whatsapp"/></a> <a href="https://www.instagram.com/kl.darmed?igsh=aW11ZnR6OW15ZTBz&utm_source=qr" target="_blank"><FaInstagram className="inst"/></a> </span><br></br><br></br>
                </div>
                <Map/>
            </div>
        </section>
    )
}