import { Header } from "../../Components/Header"
import { Inicio } from "../../Components/Inicio"
import { Sobre } from "../../Components/Sobre"
import {Campanha} from "../../Components/Campanha"
import {Experiencia} from "../../Components/Experiencia"
import {Contatos} from "../../Components/Contatos"
import {Acelera} from "../../Components/Acelera"


export function Home(){
    return(
        <>
            <Header/>
            <main>
                <section id="home" className="section"><Inicio/></section>
                <section id="sobre" className="section"><Sobre/></section> 
                <section id="campanha" className="section"><Campanha/></section>
                <section id="experiencia" className="section"><Experiencia/></section>
                <section id="acelera" className="section"><Acelera/></section>
            </main>
            <Contatos/>
        </>
            
    )
}