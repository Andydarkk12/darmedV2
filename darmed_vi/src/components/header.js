import logo from '../img/logo.png';
import { IoEye } from "react-icons/io5";
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }}
export const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className='flex'>
                <img src={logo} alt="Логотип" />
                <nav>
                    <ul>
                        <li onClick={()=>scrollToSection('services')}>Услуги</li>
                        <li onClick={()=>scrollToSection('specialists')}>Специалисты</li>
                        <li onClick={()=>scrollToSection('priceList')}>Цены</li>
                        <li onClick={()=>scrollToSection('contacts')}>Контакты</li>
                        <li onClick={()=>scrollToSection('about')}>О нас</li>
                        <li><span className="eye"><IoEye /></span></li>
                    </ul>
                </nav>
                
                </div>
            </div>

        </header>
    )
}