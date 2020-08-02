import React, { useState, useEffect } from 'react';

import './Main.scss';
import Card from '../Card';

import mockData from '../../data.json';

const Main = () => {
  const [people, setPeople] = useState([]);
  const saveData = (data) => {
    setPeople(data);
  };
  useEffect(() => {
    if (!localStorage.getItem('people')) {
      localStorage.setItem('people', JSON.stringify(mockData));
    }
    saveData(JSON.parse(localStorage.getItem('people')));
  }, []);

  const handleClick = () => {
    const divInfo = document.getElementsByClassName('main__info');
    divInfo[0].remove();
  };

  return (
    <main>
      <article className="main__info">
        <div className="info__title">
          <p>Speak out. Be heard.</p>
          <h3>Be counted</h3>
        </div>
        <div className="info__description">
          <p>
            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can
            speak out and speak freely. It’s easy: You share your opinion, we analyze and put the
            data in a public report.
          </p>
        </div>
        <div className="info__close" onClick={handleClick}>
          &times;
        </div>
      </article>

      <article className="previous__rulings">
        <h2>Previous Rulings</h2>
        <div className="cards__container">
          {people && people.map((person) => <Card key={person.id} person={person} />)}
        </div>
      </article>

      <article className="submit__name">
        <div className="submit__container">
          <div className="submit__info">
            <p>Is there anyone else you would want us to add?</p>
          </div>
          <div className="submit__button">
            <button>Submit a Name</button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
