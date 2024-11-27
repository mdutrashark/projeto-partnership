import { Header } from "../../Components/Header"
import { Footer } from "../../Components/Footer"
import { Experience } from "../../Components/Experience"

export function Home(){
    return(
        <div>
            <Header/>
            Home
            <br />
            Sobre
            <br />
            Campanha
            <br />
            <Experience/>
            <Footer/>
            
        </div>
    )
}