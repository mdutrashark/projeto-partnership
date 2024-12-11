import phoneIcon from '../../assets/Contatos-img/phone-icon.svg'
import emailIcon from '../../assets/Contatos-img/email-icon.svg'
import titleBar from '../../assets/Contatos-img/title-bar.svg'
import logoWhatsapp from '/logo-whatsapp.png'

import './contatos.css'
import { Form } from '../../Components/Contatos/form'

export function Contatos(){
    return(
        <footer id='contatos'>
            <div className='contact-container'>
                <div className='title-content'>
                    <p className='title-contact'><b id='vamos'>VAMOS</b><br />CONVERSAR</p>
                    <img className='bar' src={titleBar} alt="bar-icon" />
                </div>
                
                <div className='contact-content'>
                    <div className='icons'><img src={phoneIcon} alt="phone-icon" /><p>(11) 98695-0878</p></div>
                    <div className='icons'><img src={emailIcon} alt="email-icon" /><p>contato@partnership.com.br</p></div>
                    <p className='copyright'>Copyright © 2024 Partnership</p>
                </div>
            </div>
            <Form/>
            <a href="https://wa.me//5511917922253?text=Olá,%20vim%20pelo%20site%20e%20quero%20fazer%20parte%20do%20Partnership!" target="_blank" >
                <img id='whatsapp' src={logoWhatsapp} alt='Fale Conosco pelo WhatsApp' title='Fale Conosco pelo WhatsApp' />
            </a>
        </footer>
    )
}