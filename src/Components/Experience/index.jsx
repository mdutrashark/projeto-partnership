import React from "react";
import Carousel from '../Carousel'; // Importando o carrossel
import { ImagemCard } from "../ImagemCard"; // Importando o componente de imagem
import imgParis from '../../assets/Experience-img/img-paris.svg';
import imgSpa from '../../assets/Experience-img/img-spa.svg';
import imgIphone from '../../assets/Experience-img/img-iphones.svg';
import imgRestaurante from '../../assets/Experience-img/img-restaurante.svg';
import imgShow from '../../assets/Experience-img/img-show.svg';
import leftBar from '../../assets/Experience-img/left-bar.svg';
import rightBar from '../../assets/Experience-img/right-bar.svg';
import './Exp.css';

const cardsData = [
  {
    image: 'https://res.cloudinary.com/hello-tickets/image/upload/ar_1:1,c_fill,f_auto,q_auto,w_800/v1645844269/gd99ktjpmrtkwwlyn8hx.jpg',
    title: 'Paris',
    subtitle: 'Luxury',
  },
  {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample109.jpg',
    title: 'Jason Response',
    subtitle: 'Classic',
  },
  {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample117.jpg',
    title: 'Piff Jenkins',
    subtitle: 'Vintage',
  },
];

export function Experience() {
  return (
    <main>
      <section className="exp-container">
        <div className="left-side-content">
          <div className="left-side-text">
            <p className="left-side-title">
              CONHEÇA ALGUMAS<br />EXPERIÊNCIAS FANTÁSTICAS
            </p>
            <img src={leftBar} alt="left-bar" />
            <p className="left-copy">
              Viagens Nacionais e Internacionais<br />
              Cruzeiros<br />
              Workshops<br />
              Promoções oferecidas pelas lojas parceiras e muito mais<br />
            </p>
          </div>
          <div className="left-side-img">
            <Carousel>
              {cardsData.map((data, index) => (
                <div key={index}>
                  <ImagemCard 
                    image={data.image}
                    title={data.title} 
                    subtitle={data.subtitle} 
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="right-side-content">
          <div className="right-side-text">
            <p className="right-side-title">
              ACELERA PARTNERSHIP
            </p>
            <img src={rightBar} alt="right-bar" />
            <p className="right-copy">
              São <b>experiências extras</b> que poderão ocorrer durante o<br />
              andamento da campanha vigente, acelerando ainda mais<br />
              suas chances de <b>viver momentos fantásticos</b> com <b>resgate<br />
              imediato</b>, e o melhor, <b>sem descontar</b> ponto algum da sua<br />
              jornada dentro do programa. Você poderá aproveitar de:
            </p>
            <div className="sub-copy">
              Day Spa<br />
              Experiência Gastronômica em Restaurantes renomados<br />
              Iphones<br />
              Jet Ski<br />
              Shows, palestras e muito mais!<br />
            </div>
          </div>

          <div className="right-side-img">
            <img className="img-group" src={imgSpa} alt="Spa" />
            <img className="img-group" src={imgIphone} alt="Iphones" />
            <img className="img-group" src={imgRestaurante} alt="Restaurantes" />
            <img className="img-group" src={imgShow} alt="Shows" />
          </div>
        </div>
      </section>
    </main>
  );
}
