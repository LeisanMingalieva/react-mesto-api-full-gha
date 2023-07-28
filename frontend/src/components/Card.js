import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes?.some((i) => i === currentUser._id);
  console.log(card.likes);
  //console.log(isLiked);
  const cardLikeButtonClassName = (`card__like ${isLiked && 'card__like_active'}`);
    
  function handleClick() {
    onCardClick(card);
  }
   
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleCardDelete() {
    onCardDelete(card)
  }

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick = {handleClick}
      />
      <div className="card__description">
        <h2 className="card__name">{card.name}</h2>
          <div>
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
            <p className="card__like-count">{card.likes?.length || 0}</p>
          </div>                
      </div>    
        {isOwn && <button type="button" className="card__delete" onClick={handleCardDelete}/>}     
    </li>
  )
}

export default Card;