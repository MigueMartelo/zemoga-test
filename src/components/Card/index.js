import React, { useState } from 'react';

import './Card.scss';

const Card = ({ person }) => {
  const { picture, name, category, description, thumbsUp, thumbsDown, id } = person;

  const [voteUp, setVoteUp] = useState(thumbsUp);
  const [voteDown, setVoteDown] = useState(thumbsDown);
  const [percUp, setPercUp] = useState((voteUp * 100) / (voteUp + voteDown));
  const [percDown, setPercDown] = useState((voteDown * 100) / (voteUp + voteDown));
  const [vote, setVote] = useState('');
  const [widthUp, setWidthUp] = useState({ width: percUp.toFixed() + '%' });
  const [widthDown, setWidthDown] = useState({ width: percDown.toFixed() + '%' });
  const [userVote, setUserVote] = useState(false);

  const upDown = voteUp > voteDown ? 'up' : 'down';

  const borderVotes = { border: '2px solid white' };
  const borderUp = vote === 'up' ? borderVotes : {};
  const borderDown = vote === 'down' ? borderVotes : {};

  const saveLocalStorage = (id, vote, word) => {
    const people = JSON.parse(localStorage.getItem('people'));
    if (word === 'up') {
      const newPeople = people.map((item) => {
        if (item.id === id) {
          item.thumbsUp = vote + 1;
        }
        return item;
      });
      localStorage.setItem('people', JSON.stringify(newPeople));
    } else if (word === 'down') {
      const newPeople = people.map((item) => {
        if (item.id === id) {
          item.thumbsDown = vote + 1;
        }
        return item;
      });
      localStorage.setItem('people', JSON.stringify(newPeople));
    }
  };

  const handleVotes = (vote, id) => {
    if (vote === 'up') {
      setVoteUp(voteUp + 1);
      setPercUp((voteUp * 100) / (voteUp + voteDown));
      setPercDown((voteDown * 100) / (voteUp + voteDown));
      setWidthUp({ width: percUp.toFixed() + '%' });
      setWidthDown({ width: percDown.toFixed() + '%' });
      setVote('');
      setUserVote(true);
      saveLocalStorage(id, voteUp, 'up');
    } else {
      setVoteDown(voteDown + 1);
      setPercDown((voteDown * 100) / (voteUp + voteDown));
      setPercUp((voteUp * 100) / (voteUp + voteDown));
      setWidthDown({ width: percDown.toFixed() + '%' });
      setWidthUp({ width: percUp.toFixed() + '%' });
      setVote('');
      setUserVote(true);
      saveLocalStorage(id, voteDown, 'down');
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
            <h4 data-testid="person-name">{name}</h4>
          </div>
        </div>
        <div className="card__info">
          <span data-testid="person-category">
            <strong>1 month ago</strong> in {category}
          </span>
        </div>
        <div className="card__description" data-testid="person-description">
          <p>{!userVote ? description : 'Thank you for voting!'}</p>
        </div>

        <div className="card__vote">
          {!userVote ? (
            <>
              <div className="votes">
                <div className="votes__positive" onClick={() => setVote('up')} style={borderUp}>
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <div className="votes__negative" onClick={() => setVote('down')} style={borderDown}>
                  <i className="fas fa-thumbs-down"></i>
                </div>
              </div>
              <button onClick={() => handleVotes(vote, id)} disabled={disableButtom}>
                Vote Now
              </button>
            </>
          ) : (
            <button onClick={() => setUserVote()}>Vote Again</button>
          )}
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
