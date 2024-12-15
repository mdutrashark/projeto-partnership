import './header.css'

import openMenu from '../../assets/Header-img/open-menu.svg'
import closeMenu from '../../assets/Header-img/close-menu.svg'

export function Header(){
    return(
        <header>
                <img id='logo-header' src="logo1-img.png" alt="logo-header" />
            <nav>
                <ul id='menu'>
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#campanha">Campanha</a></li>
                    <li><a href="#experiencia">Experiências</a></li>
                    <li><a href="#acelera">Acelera Partnership</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>

                <div id='mobile-menu-icon'> 
                    <button><img id='open-menu' src={openMenu} alt="open-menu" /></button>
                </div>
            </nav>

            <div id='mobile-menu'>
                <ul>
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#campanha">Campanha</a></li>
                    <li><a href="#experiencia">Experiências</a></li>
                    <li><a href="#acelera">Acelera Partnership</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
                
                {/* <div id='mobile-menu-icon'> 
                    <button><img id='open-menu' src={closeMenu} alt="close-menu" /></button>
                </div> */}

            </div>
        </header>
    )
}