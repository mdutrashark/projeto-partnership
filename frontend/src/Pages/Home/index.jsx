import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Experience } from "../../Components/Experience"
import { Campanha } from "../../Components/Campanha"
import { Sobre } from "../../Components/Sobre"


export function Home(){
    return(
        <div>
            <Header/>
            Home
            <br />
            <Sobre/>
            <Campanha/>
            <Experience/>
            <Footer/>
            
        </div>
    )
}