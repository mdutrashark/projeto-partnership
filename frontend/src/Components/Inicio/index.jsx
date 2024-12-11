import bottomBar from '../../assets/Home-img/bottom-bar.svg'
import upperBar from '../../assets/Home-img/upper-bar.svg'

import { Button } from '../Button/Index'

import './Inicio.css'

export function Inicio(){
    return(
        <main>
            <section id='Home'>
                <div id='information'>
                    <h1>PARTNERSHIP</h1>
                    <img id='upper-bar' src={upperBar} alt="upper-bar" />
                    <h2 id='sub-title'>UMA PARCERIA<br /> 
                    DE SUCESSO
                    </h2>
                    <img id='bottom-bar' src={bottomBar} alt="bottom-bar" />
                    <p id='frase-efeito'>Faça parte dessa parceria de sucesso, acumule pontos<br /> 
                    e  troque por  Experiências Incríveis<br />
                    </p>
                    <Button id='home-btn' type="submit" buttonStyle="singUp" >
                        Conheça
                    </Button>
                </div>
                <div id='background'></div>
            </section>
        </main>
    )
}