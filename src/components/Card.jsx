import React from 'react';
import "./Card.css";

function Card({ item }) {
  const { categoria, descripcion, imagen, precio, id_item } = item;
  const imageURL = imagen;
   
  const handleWhatsAppButtonClick = () => {
    const message = `Hola Licoreria Jankot, quiero esta promo de ${descripcion} por ${precio}.`;
    const whatsappURL = `https://wa.me/51961948146?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div id={id_item} className='Card'>
      <div className="PriceCircle">
        <h2>{precio}</h2>
      </div>
      <img src={imageURL} alt={categoria} />
      <div className="contenedor-texto">
        <p>{descripcion}</p>
      </div>
      
      <button onClick={handleWhatsAppButtonClick}>WhatsApp</button>
    </div>
  );
}

export default Card;




