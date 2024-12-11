import phoneIcon from '../../assets/footer-icons/phone-icon.svg'
import emailIcon from '../../assets/footer-icons/email-icon.svg'
import instaIcon from '../../assets/footer-icons/insta-icon.svg'
import localicon from '../../assets/footer-icons/local-icon.svg'
import titleBar from '../../assets/footer-icons/title-bar.svg'

import './Footer.css'
import { Form } from '../Form/index'

export function Footer(){
    return(
        <footer>
            <div className='contact-container'>
                <div className='title-content'>
                    <p className='title-contact'><b id='vamos'>VAMOS</b><br />CONVERSAR</p>
                    <img className='bar' src={titleBar} alt="bar-icon" />
                </div>
                
                <div className='contact-content'>
                    <div className='icons'><img src={phoneIcon} alt="phone-icon" /><p>(99)99999-9999</p></div>
                    <div className='icons'><img src={emailIcon} alt="email-icon" /><p>(99)contact@mail.com</p></div>
                    <div className='icons'><img src={instaIcon} alt="insta-icon" /><p>(99)@osni_partnership</p></div>
                    <div className='icons'><img src={localicon} alt="local-icon" /><p>Rua dos bobos nº0 - Casa Engraçada, RJ</p></div>
                    <p className='copyright'>Copyright © 2024 Partnership</p>
                </div>
            </div>
            <Form/>
        </footer>
    )
}