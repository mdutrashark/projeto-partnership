import './header.css'

export function Header(){
    return(
        <header>
             <div id='container-logo'>
                <img id='logo-header' src="logo1-img.png" alt="logo-header" />
             </div>
             <nav>
                <ul>
                    <li><a href="#home">Home</a></li> 
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#campanha">Campanha</a></li>
                    <li><a href="#experiencia">Experiências</a></li>
                    <li><a href="#acelera">Acelera Partnership</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
             </nav>
        </header>
    )
}