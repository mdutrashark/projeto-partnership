import React from "react";
import "./style.css"; 

export const ImagemCard = ({  image, title, subtitle}) => {
  return (
    <figure className="snip1577">
      <img src={image} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </figcaption>
    </figure>
  );
};

