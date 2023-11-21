import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ src, path, title }) => {
  const [cardFilter, setCardFilter] = useState(false);
  const handleCardMouseEnter = () => {
    setCardFilter(true);
  };
  const handleCardMouseLeave = () => {
    setCardFilter(false);
  };

  return (
    <Link to={path} onClick={() =>
      (window.location.href = path)
    }>
      <div
        className='card'
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      >
        <img src={src} alt='project' />
        {cardFilter&&<div className='card-cover'></div>}
        <p className={`${cardFilter && "card-title"}`}>{title}</p>
      </div>
    </Link>
  );
};

export default Card;
