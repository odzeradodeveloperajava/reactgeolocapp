import React from 'react';
import PropTypes from 'prop-types';
import './card.css';


const Card = ({ cardId, imageUrl, size}) => {
    return (
    <div className="imageCard" id={cardId}>
        <a>File name: {cardId}</a>
        <div className="cardImageContainer">
          <img className="image" src={imageUrl} />
        </div>
        <a>size: {size} kb</a>
    </div>
    );
  };

export default Card;