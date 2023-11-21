import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";
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
    <NavLink to={path}>
      <div
        className='card'
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      >
        <img src={src} alt='project' />
        {cardFilter && <div className='card-cover'></div>}
        <p className={`${cardFilter && "card-title"}`}>{title}</p>
      </div>
    </NavLink>
  );
};

export default Card;
