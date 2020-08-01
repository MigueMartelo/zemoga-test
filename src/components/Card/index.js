import React from 'react';

import './Card.scss';

const Card = ({ person }) => {
  const { picture, name, category, description, thumbsUp, thumbsDown } = person;

  const upDown = thumbsUp > thumbsDown ? 'up' : 'down';

  const percUp = (thumbsUp * 100) / (thumbsUp + thumbsDown);
  const percDown = (thumbsDown * 100) / (thumbsUp + thumbsDown);

  return (
    <div className={`card__rouling ${picture}`}>
      <div className="card__content">
        <div className="card__title">
          <div className={`card__hand-thumbs ${upDown}`}>
            <i className={`fas fa-thumbs-${upDown}`}></i>
          </div>
          <div className="card__name">
            <h4>{name}</h4>
          </div>
        </div>
        <div className="card__info">
          <span>
            <strong>1 month ago</strong> in {category}
          </span>
        </div>
        <div className="card__description">
          <p>{description}</p>
        </div>

        <div className="card__vote">
          <div className="votes">
            <div className="votes__positive">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="votes__negative">
              <i className="fas fa-thumbs-down"></i>
            </div>
          </div>
          <button>Vote Now</button>
        </div>

        <div className="card__votes-results">
          <div className="votes__up">
            <i className="fas fa-thumbs-up"></i>
            <span>{percUp.toFixed()}%</span>
          </div>
          <div className="votes__down">
            <i className="fas fa-thumbs-down"></i>
            <span>{percDown.toFixed()}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
