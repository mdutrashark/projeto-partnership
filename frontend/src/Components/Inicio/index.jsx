import eventoPartnership1 from '../../assets/Inicio-img/evento-partnership-1.avif'
import eventoPartnership2 from '../../assets/inicio-img/evento-partnership-2.avif'
import bottomBar from '../../assets/Inicio-img/bottom-bar.svg'
import upperBar from '../../assets/Inicio-img/upper-bar.svg'

import { Button } from '../Button/Index'

import './inicio.css'

export function Inicio(){

    return(
        <>
        
          {/* Slider */}
          <div className='slider'>
                <div className='slides'>
                    {/* Radio Buttons */}
                    <input type="radio" name="radio-btn" id="radio1" title='Slide 1'/>
                    <input type="radio" name="radio-btn" id="radio2" title='Slide 2'/>

                    {/* Slide images */}
                    <div className='slide first'>
                        <img src={eventoPartnership1} alt="imagem-1" />
                    </div>
                    <div className='slide'>
                        <img src={eventoPartnership2} alt="imagem-2" />
                    </div>
                        
                    {/* Navigation auto */}
                    <div className='navigation-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                    </div>

                </div>

                {/* Navigation manual */}
                <div className='manual-navigation'>
                    <label for="radio1" className='manual-btn'></label>
                    <label for="radio2" className='manual-btn'></label>
                </div>
            </div>


            {/* Container */}
            <div id='information'>
                <h1>PARTNERSHIP</h1>
                <img id='upper-bar' src={upperBar} alt="upper-bar" />
                <h2 id='sub-title'>UMA PARCERIA<br /> 
                DE SUCESSO
                </h2>
                <img id='bottom-bar' src={bottomBar} alt="bottom-bar" />
                <p id='frase'>Faça parte dessa parceria de sucesso, acumule pontos<br /> 
                e  troque por  Experiências Incríveis<br />
                </p>
                <a href="#sobre"><Button id='home-btn' type="submit" buttonStyle="singUp">Junte-se a nós</Button></a>
            </div>
            <div id='background'></div>

        </>
           
    )
}