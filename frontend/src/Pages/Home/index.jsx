import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Experience } from "../../Components/Experience"
import { Campanha } from "../../Components/Campanha"
import { Sobre } from "../../Components/Sobre"
import { Inicio } from "../../Components/Inicio"


export function Home(){
    return(
        <div>
            <Header/>
            <Inicio/>
            <Sobre/>
            <Campanha/>
            <Experience/>
            <Footer/>
            
        </div>
    )
}