import imgParis from '../../assets/Experience-img/img-paris.svg'
import imgSpa from '../../assets/Experience-img/img-spa.svg'
import imgIphone from '../../assets/Experience-img/img-iphones.svg'
import imgRestaurante from '../../assets/Experience-img/img-restaurante.svg'
import imgShow from '../../assets/Experience-img/img-show.svg'
import leftBar from '../../assets/Experience-img/left-bar.svg'
import rightBar from '../../assets/Experience-img/right-bar.svg'
import leftSeta from '../../assets/Experience-img/left-seta.svg'
import rightSeta from '../../assets/Experience-img/right-seta.svg'

import './Exp.css'

export function Experience(){
    return(
        <section className='exp-container'>
            <div className='left-side-content'>
                
                <div className='left-side-text'>
                    <p className='left-side-title'>
                        CONHEÇA ALGUMAS<br />EXPERIÊNCIAS FANTÁSTICAS
                    </p>
                    <img src={leftBar} alt="left-bar" />
                    <p className='left-copy'>Viagens Nacionais e Internacionais<br />
                        Cruzeiros<br />
                        Workshops<br />
                        Promoções oferecidas pelas lojas parceiras e muito mais<br />
                    </p>
                </div><br />
                    
                <div className='left-side-img'>
                    <img className='travel-img' src={imgParis} alt="imagens-viagens" />
                    <div id='seta-esquerda' className='setas'><img id='left-seta' src={leftSeta} alt="seta-esquerda" /></div>
                    <div id='seta-direita' className='setas'><img id='right-seta' src={rightSeta} alt="seta-direita" /></div>
                </div>
            </div>  

            <div className='right-side-content'>
                <div className='right-side-text'>
                    <p className='right-side-title'>
                        ACELERA PARTNERSHIP
                    </p>
                    <img src={rightBar} alt="right-bar" />
                    <p className='right-copy'>
                        São <b>experiências extras</b> que poderão ocorrer durante o<br />
                        andamento da  campanha vigente, acelerando ainda mais<br /> 
                        suas chances de <b>viver momentos fantásticos</b> com <b>resgate<br /> 
                        imediato</b>, e o melhor, <b>sem descontar</b> ponto algum da sua<br /> 
                        jornada dentro do programa. Você poderá aproveitar de:<br /><br />

                        <p className='sub-copy'>Day Spa<br />
                        Experiência Gastronômica em Restaurantes renomados<br />
                        Iphones<br />
                        Jet Ski<br />
                        Shows, palestras e muito mais!<br /></p>
                    </p>
                </div>

                <div className='right-side-img'>
                    <img className='img-group' src={imgSpa} alt="Spa" />
                    <img className='img-group' src={imgIphone} alt="Iphones" />
                    <img className='img-group' src={imgRestaurante} alt="Restaurantes" />
                    <img className='img-group' src={imgShow} alt="Shows" />
                </div>
            </div>
          
        </section>
    )
}