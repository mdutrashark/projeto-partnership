import leftBar from '../../assets/Campanha-img/left-bar.svg'
import middleBar from '../../assets/Campanha-img/middle-bar.svg'
import rightBar from '../../assets/Campanha-img/right-bar.svg'
import oneHouse from '../../assets/Campanha-img/one-house.svg'
import grupoMaxi from '../../assets/Campanha-img/grupo-maxi.svg'

import './campanha.css'

export function Campanha(){
    return(
        <>
            <div id='campanha-container'>
                <div className='left-content'>
                    <h3>CAMPANHA</h3>
                    <img id='left-bar' src={leftBar} alt="barra" />
                    <p id='left-copy'>Adotamos um plano de reconhecimento<br /> 
                    onde você é dono dos seus pontos e<br />  
                    poderá utiliza-lôs da forma que achar<br />  
                    mais conveniente!<br /> 
                    <br />    
                    Você terá um período de <b className='b-black'>18 meses</b> para<br />  
                    <b className='b-black'>acúmulo</b> desses pontos, então, a cada<br />  
                    R$1,00 gasto nas nossas lojas parceiras<br />  
                    você ganha 1 ponto, ou seja, <b className='b-black' >R$1,00 = 1 ponto.</b><br /> 
                    <br /> 
                    O melhor é que você <b className='b-black'>não depende</b> de<br />  
                    sorteios ou estar entre os mais pontuados<br />  
                    para resgatar  as experiências.<br />  
                    Basta acumular os pontos e solicitar o<br />  
                    resgate desejado. 
                    </p>
                </div>

                <div className='middle-content'>
                    <h3>LOJAS PARCEIRAS</h3>
                    <img id='middle-bar' src={middleBar} alt="barra" />
                    <p id='middle-copy'>Atualmente temos duas <b className='b-black'>lojas parceiras</b><br />  
                    de <b className='b-black'>destaque</b> no mundo do Art&Decor e<br />  
                    você pode conhecer mais sobre elas<br />  
                    acessando seus respectivos sites<br />  
                    clicando abaixo:<br /> 
                    </p>
                    <a href="https://onehouseambientes.com.br/" target="_blank" rel="noopener noreferrer">
                    <img className='middle-img' src={oneHouse} alt="logo-OneHouse" />
                    </a>
                    <a href="https://grupomaxi.com.br/" target="_blank" rel="noopener noreferrer">
                    <img id='grupo-maxi' className='middle-img' src={grupoMaxi} alt="logo-GrupoMaxi" />
                    </a>
                </div>

                <div className='right-content'>
                    <h3>QUEM PODE<br />PARTICIPAR?</h3>
                    <img id='right-bar' src={rightBar} alt="barra" />
                    <p id='right-copy' >Lojas de Art&Decor<br /> 
                    Construtoras<br /> 
                    Arquitetos(a)<br /> 
                    Engenheiros(a)<br /> 
                    Designers<br /> 
                    Consultores(a)<br /> 
                    Profissionais do Art&Decor em geral<br /> 
                    </p>
                </div>
            </div>
            
        </>
    )
}