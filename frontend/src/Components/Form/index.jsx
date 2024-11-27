import { useState, useEffect } from 'react'
import './Form.css'

import { Button } from '../Button/Index'

export function Form(){
    return(
        <form action=''>
            <div className='form-group'>
                <div className='small-inputs'>
                    <input className="small" type="text" id="name" placeholder="Nome" />
                    <input className="small" type="text" id="surname" placeholder="Sobrenome"  />
                </div><br />
                <input className='large-input' type="text" id="professional" placeholder="Digite sua profissão ou o nome da sua loja" /><br /><br />
                <input className='large-input' type="email" id="email" placeholder="Email"/><br /><br />
                <textarea className='message' id="message" placeholder="Mensagem" rows="4" ></textarea><br /><br />
                <Button type="submit" buttonStyle="contact">
                  ENTRAR EM CONTATO AGORA
                </Button>
            </div>
        </form>
    )
}