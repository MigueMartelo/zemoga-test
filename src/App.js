import React from "react";
import "./App.scss";

function App() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <header>
            <nav className="main__navbar">
              <h1 className="main__title">Rule of Thumb</h1>
              <ul className="main__menu">
                <li className="menu__item">Past Trials</li>
                <li className="menu__item">How It Works</li>
                <li className="menu__item">Log In / Sign Up</li>
                <li className="menu__item">
                  <i className="fas fa-search"></i>
                </li>
              </ul>
            </nav>
          </header>
          <div className="hero__card">
            <div className="hero__card-content">
              <small>What's your opinion on</small>
              <h2>Pope Francis?</h2>
              <p>
                He’s talking tough on clergy sexual abuse, but is he just another papal pervert
                protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
              </p>
              <p>
                <i className="fab fa-wikipedia-w"></i>
                <a href="https://wikipedia.com">More Information</a>
              </p>
              <p>
                <strong>What's Your Veredit?</strong>
              </p>
            </div>
            <div className="hero__votes">
              <div className="votes__up">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="votes__down">
                <i className="fas fa-thumbs-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__days-remained">
          <p className="closing__p">closing in</p>
          <p className="closing__days">
            22 <span>days</span>
          </p>
        </div>
      </div>

      <main className="container">
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
          <div className="info__close">&times;</div>
        </article>

        <article className="previous__rulings">
          <h2>Previous Rulings</h2>
          <div className="cards__container">
            <div className="card__rouling kanye">
              <div className="card__content">
                <div className="card__title">
                  <div className="card__hand-thumbs up">
                    <i className="fas fa-thumbs-up"></i>
                  </div>
                  <div className="card__name">
                    <h4>Kanye West</h4>
                  </div>
                </div>
                <div className="card__info">
                  <span>
                    <strong>1 month ago</strong> in Entertainment
                  </span>
                </div>
                <div className="card__description">
                  <p>
                    Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit
                    libero.
                  </p>
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
                    <span>64%</span>
                  </div>
                  <div className="votes__down">
                    <i className="fas fa-thumbs-down"></i>
                    <span>36%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__rouling mark">
              <div className="card__content">
                <div className="card__title">
                  <div className="card__hand-thumbs down">
                    <i className="fas fa-thumbs-down"></i>
                  </div>
                  <div className="card__name">
                    <h4>Mark Zuckenberg</h4>
                  </div>
                </div>
                <div className="card__info">
                  <span>
                    <strong>1 month ago</strong> in Business
                  </span>
                </div>
                <div className="card__description">
                  <p>Thank you for voting!</p>
                </div>

                <div className="card__vote">
                  <button>Vote Again</button>
                </div>

                <div className="card__votes-results">
                  <div className="votes__up">
                    <i className="fas fa-thumbs-up"></i>
                    <span>36%</span>
                  </div>
                  <div className="votes__down">
                    <i className="fas fa-thumbs-down"></i>
                    <span>64%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__rouling cristina">
              <div className="card__content">
                <div className="card__title">
                  <div className="card__hand-thumbs down">
                    <i className="fas fa-thumbs-down"></i>
                  </div>
                  <div className="card__name">
                    <h4>Cristina Fernández de Kirchner</h4>
                  </div>
                </div>
                <div className="card__info">
                  <span>
                    <strong>1 month ago</strong> in Politics
                  </span>
                </div>
                <div className="card__description">
                  <p>Thank you for voting!</p>
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
                    <span>36%</span>
                  </div>
                  <div className="votes__down">
                    <i className="fas fa-thumbs-down"></i>
                    <span>64%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card__rouling malala">
              <div className="card__content">
                <div className="card__title">
                  <div className="card__hand-thumbs up">
                    <i className="fas fa-thumbs-up"></i>
                  </div>
                  <div className="card__name">
                    <h4>Malala Yousafzai</h4>
                  </div>
                </div>
                <div className="card__info">
                  <span>
                    <strong>1 month ago</strong> in Entertainment
                  </span>
                </div>
                <div className="card__description">
                  <p>Thank you for voting!</p>
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
                    <span>64%</span>
                  </div>
                  <div className="votes__down">
                    <i className="fas fa-thumbs-down"></i>
                    <span>36%</span>
                  </div>
                </div>
              </div>
            </div>
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

      <footer className="container">
        <div className="footer__container">
          <div className="footer__nav">
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer__socials">
            <p>Fallow Us</p>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
