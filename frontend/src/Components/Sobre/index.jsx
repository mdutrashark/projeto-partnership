import brindarImg from '../../assets/Sobre-img/brindar-img.avif'
import aboutBar from '../../assets/Sobre-img/bar.svg'

import { Button } from '../Button/Index'

import './sobre.css'

export function Sobre(){
    return(
        <>
            <article>
                <div id='about-left-content'>
                    <h3 id='about-title'>Sobre o PARTNERSHIP</h3>
                    <img id='aboutBar' src={aboutBar} alt="barra" />
                    <p id='about-copy'>
                    O <b>Partnership</b> é um <b>programa de pontuação</b> criado para fortalecer<br /> 
                    <b>relações comerciais</b> e impulsionar o seu sucesso no mercado.<br /> 
                    Em um cenário cada vez mais competitivo, nós acreditamos que<br />
                    <b>parcerias estratégicas</b> são a chave para o crescimento sustentável.<br />
                    <br />
                    <b id='phrase-1'>Por que o Partnership é Importante?</b> <br />
                    <br />
                    <b>Recursos e Conhecimento Unificados:</b> Conectamos você a recursos e<br /> 
                    expertise para alcançar objetivos em conjunto de maneira mais eficaz!<br />
                    <br />
                    <b>Inovação e Aprendizado Contínuos:</b> Parcerias abrem portas para novas<br /> 
                    ideias, ampliando a criatividade e a adaptação diante das constantes<br /> 
                    mudanças de mercado.<br />
                    <br />
                    <b>O Diferencial que Impulsiona o Crescimento:</b> Ao investir em parcerias sólidas<br /> 
                    e colaborativas, garantimos que seu negócio se mantenha competitivo e preparado para o futuro!<br />  
                    </p><br />

                    <b><p id='phrase-2'>Junte-se a nós e transforme sua visão em conquistas reais!</p></b>
                </div> 

                <div id='about-right-content'>
                   <img id='comemoration-img' src={brindarImg} alt="comemoração" /> 
                   <a href="#contatos"><Button id='about-btn' type="submit" buttonStyle="singUp" >Quero fazer parte</Button></a>
                </div>
            </article>
        </>
            
    )
}