import imgSpa from '../../assets/Acelera-img/spa-img.avif'
import imgIphone from '../../assets/Acelera-img/iphones-img.avif'
import imgRestaurante from '../../assets/Acelera-img/restaurantes-img.avif'
import imgShow from '../../assets/Acelera-img/shows-img.avif'
import topBar from '../../assets/Acelera-img/top-bar.svg'
import bottomBar from '../../assets/Acelera-img/bottom-bar.svg'

import './acelera.css'

export function Acelera(){
    return(
        <>
            <div className='left-img-group'>
                <img className='img-group' src={imgSpa} alt="Spa" />
                <img className='img-group' src={imgIphone} alt="Iphones" />
                <img className='img-group' src={imgRestaurante} alt="Restaurantes" />
                <img className='img-group' src={imgShow} alt="Shows" />
            </div>

            <div className='right-content-text'>
                <p className='aclr-right-title'>
                    ACELERA PARTNERSHIP
                </p>
                <img id='aclr-top-bar' src={topBar} alt="barra" />
                <p className='aclr-phrase1-copy'>
                    São <b>experiências extras</b> que poderão ocorrer durante o<br />
                    andamento da  campanha vigente, acelerando ainda mais<br /> 
                    suas chances de <b>viver momentos fantásticos</b> com <b>resgate<br /> 
                    imediato</b>, e o melhor, <b>sem descontar</b> ponto algum da sua<br /> 
                    jornada dentro do programa. <br /><br />
                <img id='aclr-bottom-bar' src={bottomBar} alt="barra" />

                    <p className='aclr-phrase2-copy'>Day Spa<br />
                    Experiência Gastronômica em Restaurantes renomados<br />
                    Iphones<br />
                    Jet Ski<br />
                    Shows, palestras e muito mais!<br /></p>
                </p>
            </div>

        </>   
    )
}