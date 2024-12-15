import './form.css'

import { Button } from '../Button/Index'

export function Form(){
    return(
        <form action=''>
            <div className='form-group'>
                <div className='small-group'>
                    <input className="small-inputs" type="text" id="name" placeholder="Nome" />
                    <input className="small-inputs" type="text" id="surname" placeholder="Sobrenome"  />
                </div><br />
                <input className='large-inputs' type="text" id="professional" placeholder="Digite sua profissão ou o nome da sua loja" /><br /><br />
                <input className='large-inputs' type="email" id="email" placeholder="Email"/><br /><br />
                <textarea className='message-input' id="message-input" placeholder="Mensagem" rows="4" ></textarea><br /><br />
                <Button id="form-btn" type="submit" buttonStyle="contact">
                  ENTRAR EM CONTATO AGORA
                </Button>
            </div>
        </form>
    )
}