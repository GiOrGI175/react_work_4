import React from 'react';
import style from './Card.module.scss';
import loactionsvg from '/location.svg';

const Card = (props) => {
  const data = props.data;

  return (
    <>
      {data.map((card) => (
        <div
          className={style.Card}
          key={`${card.title}-${card.imageUrl}-${card.location}`}
        >
          <div className={style.imgbox}>
            <img src={card.imageUrl} alt='locationFoto' />
          </div>
          <div className={style.txt_content}>
            <p className={style.location}>
              <img src={loactionsvg} alt='localtion' />
              {card.location}{' '}
              <a href={card.googleMapsUrl} target='blank'>
                View on Google Maps
              </a>{' '}
            </p>
            <h2>{card.title}</h2>
            <span>
              {card.startDate}-{card.endDate}
            </span>
            <p className={style.description}>{card.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
