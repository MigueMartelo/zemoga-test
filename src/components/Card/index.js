import React, { useState } from 'react';

import './Card.scss';

const Card = ({ person }) => {
  const { picture, name, category, description, thumbsUp, thumbsDown } = person;

  const [voteUp, setVoteUp] = useState(thumbsUp);
  const [voteDown, setVoteDown] = useState(thumbsDown);
  const [percUp, setPercUp] = useState((voteUp * 100) / (voteUp + voteDown));
  const [percDown, setPercDown] = useState((voteDown * 100) / (voteUp + voteDown));
  const [vote, setVote] = useState('');
  const [widthUp, setWidthUp] = useState({ width: percUp.toFixed() + '%' });
  const [widthDown, setWidthDown] = useState({ width: percDown.toFixed() + '%' });

  const upDown = voteUp > voteDown ? 'up' : 'down';

  const handleVotes = (vote) => {
    if (vote === 'up') {
      setVoteUp(voteUp + 1);
      setPercUp((voteUp * 100) / (voteUp + voteDown));
      setWidthUp({ width: percUp.toFixed() + '%' });
      setVote('');
    } else {
      setVoteDown(voteDown + 1);
      setPercDown((voteDown * 100) / (voteUp + voteDown));
      setWidthDown({ width: percDown.toFixed() + '%' });
      setVote('');
    }
  };

  const disableButtom = vote ? false : true;

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
            <div className="votes__positive" onClick={() => setVote('up')}>
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="votes__negative" onClick={() => setVote('down')}>
              <i className="fas fa-thumbs-down"></i>
            </div>
          </div>
          <button onClick={() => handleVotes(vote)} disabled={disableButtom}>
            Vote Now
          </button>
        </div>

        <div className="card__votes-results">
          <div className="votes__up" style={widthUp}>
            <i className="fas fa-thumbs-up"></i>
            <span>{percUp.toFixed()}%</span>
          </div>
          <div className="votes__down" style={widthDown}>
            <i className="fas fa-thumbs-down"></i>
            <span>{percDown.toFixed()}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
