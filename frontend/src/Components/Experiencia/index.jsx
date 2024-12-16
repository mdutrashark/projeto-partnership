import topBar from '../../assets/Experiencia-img/top-bar.svg'
import bottomBar from '../../assets/Experiencia-img/bottom-bar.svg'

import './experiencia.css'

import {Slider} from "./slider"

export function Experiencia(){
    return(
        <>
            <div className='exp-text-content'>
                <p className='exp-title'>
                    VIVA EXPERIÊNCIAS<br />FANTÁSTICAS
                </p>
                <img id='exp-top-bar' src={topBar} alt="barra" />
                <p className='phrase1-copy'>Com o Partnership você pode fazer viagens emocionantes, colecionar<br />
                    momentos incríveis, criar memórias e viver experiências únicas.<br /><br />
                </p>
                <img id='exp-bottom-bar' src={bottomBar} alt="barra" />
                <p className='phrase2-copy'>
                    Viagens Nacionais e Internacionais<br />
                    Cruzeiros<br />
                    Workshops<br />
                    Promoções oferecidas pelas lojas parceiras e muito mais<br />
                </p>
            </div><br />
            <Slider/>
        </>          
       
    )
}