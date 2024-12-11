import faceLogo from '../../assets/social/face.png'
import instaLogo from '../../assets/social/insta.png'
import whatsappLogo from '../../assets/social/whatsapp.png'
import { Button } from '../Button/Index'
import './styles.css'

export function Header(){
    return(
        <header>
             <div>
                <img src="favicon.png" alt="logo" />
             </div>
             <nav>
                <ul>
                    {/* Adicionar tag A para menu âncora */}
                    <li>Home</li> 
                    <li>Sobre</li>
                    <li>Campanha</li>
                    <li>Experiências</li>
                    <li>Contatos</li>
                </ul>
             </nav>
             <section className="social">
                 {/* Adicionar tag A para linkar as redes sociais */}
                <img src={faceLogo} alt="Logo facebook" />
                <img src={instaLogo} alt="Logo instagram" />
                <img src={whatsappLogo} alt="Logo whatsapp" />
             </section>
             <Button buttonStyle='login'>ENTRE OU CADASTRE-SE</Button>
        </header>
    )
}