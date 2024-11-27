import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Experience } from "../../Components/Experience"
import { Campanha } from "../../Components/Campanha"


export function Home(){
    return(
        <div>
            <Header/>
            Home
            <br />
            Sobre
            <br />
            <Campanha/>
            <Experience/>
            <Footer/>
            
        </div>
    )
}