import React from "react";
import "./App.scss";

function App() {
  return (
    <div>
      <hero>
        <nav>
          <h1 className="site__title">Rule of Thumb</h1>
          <ul className="main__menu">
            <li className="menu__item">Past Trials</li>
            <li className="menu__item">How It Works</li>
            <li className="menu__item">Log In / Sign Up</li>
            <li className="menu__item">
              <i className="fas fa-search"></i>
            </li>
          </ul>
        </nav>
        <div className="hero__card">
          <p>What's your opinion on</p>
          <h2>Pope Francis?</h2>
          <p>
            He’s talking tough on clergy sexual abuse, but is he just another papal pervert
            protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
          </p>
          <p>
            <i className="fab fa-wikipedia-w"></i>
            More information
          </p>
          <p>
            <strong>What's Your Veredit?</strong>
          </p>
          <div className="hero_votes">
            <div className="votes_up">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <div className="votes_down">
              <i className="fas fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="hero__days-remainded">
          <p>closing in</p>
          <p>22 days</p>
        </div>
      </hero>

      <main>
        <article>
          <div>
            <p>Speak out. Be heard.</p>
            <h3>Be counted</h3>
          </div>
          <div>
            <p>
              Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can
              speak out and speak freely. It’s easy: You share your opinion, we analyze and put the
              data in a public report.
            </p>
          </div>
        </article>

        <article className="previous__rulings">
          <h2>Previous Rulings</h2>
          <div className="card__rouling">
            <div className="card__title">
              <div className="card__hand-thumbs">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="card__name">
                <h4>Kanye West</h4>
              </div>
            </div>
            <div className="card__content">
              <p>
                Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.
              </p>
              <div className="card__button">
                <button>View Full Report</button>
              </div>
              <div className="card__time">
                <span>1 month ago in Enternainment</span>
              </div>
            </div>
            <div className="card__votes">
              <div className="votes__up">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="votes__down">
                <i className="fas fa-thumbs-down"></i>
              </div>
            </div>
          </div>
        </article>

        <article className="submit__name">
          <div className="submit__info">
            <p>Is there anyone else you would want us to add?</p>
          </div>
          <div className="submit__button">
            <button>Submit a Name</button>
          </div>
        </article>
      </main>

      <footer>
        <div className="footer__nav">
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer__socials">
          Fallow Us
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
