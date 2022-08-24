import React from "react";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="root">
      <Header />
      <main className="content">
        <section className="subheader">
          <h1 className="subheader__title">Night Watch</h1>
          <div className="subheader__info">
            <a href="" className="subheader__info_link">
              <p>2021</p>
            </a>
            <a href="" className="subheader__info_link">
              <p>18+</p>
            </a>
            <a href="" className="subheader__info_link">
              <p>9 Seasons</p>
            </a>
            <a href="" className="subheader__info_link">
              <img src="images/Rating.png" alt="" />
            </a>
            <a href="" className="subheader__info_link">
              <p>8.8</p>
            </a>
          </div>
          <p className="subheader__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            et elit lacinia urna.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <div className="subheader__button">
            <button className="subheader__button-watch">
              <img src="images/play.png" alt="" />
              Watch
            </button>
            <button className="subheader__button-more">More information</button>
          </div>
        </section>
        <section className="shows">
          <div className="shows__title">
            <div className="shows__title-rectangle"></div>
            <a href="" className="shows__title-text">
              <h2>Trending TV Shows </h2>
            </a>
          </div>
          <div className="shows__grid">
            <img src="images/shows/1.png" alt="" className="shows__grid-item" />
            <img src="images/shows/2.png" alt="" className="shows__grid-item" />
            <img src="images/shows/3.png" alt="" className="shows__grid-item" />
            <img src="images/shows/4.png" alt="" className="shows__grid-item" />
            <img src="images/shows/5.png" alt="" className="shows__grid-item" />
            <img src="images/shows/6.png" alt="" className="shows__grid-item" />
          </div>
        </section>
        <section className="movies">
          <div className="movies__title">
            <div className="movies__title-rectangle"></div>
            <a href="" className="movies__title-text">
              <h2>Trending Movies </h2>
            </a>
          </div>
          <div className="movies__grid">
            <img
              src="images/movies/1.png"
              alt=""
              className="movies__grid-item"
            />
            <img
              src="images/movies/2.png"
              alt=""
              className="movies__grid-item"
            />
            <img
              src="images/movies/3.png"
              alt=""
              className="movies__grid-item"
            />
            <img
              src="images/movies/4.png"
              alt=""
              className="movies__grid-item"
            />
            <img
              src="images/movies/5.png"
              alt=""
              className="movies__grid-item"
            />
            <img
              src="images/movies/6.png"
              alt=""
              className="movies__grid-item"
            />
          </div>
          <button className="movies__button">See more</button>
        </section>
        <section className="genres">
          <div className="genres__title">
            <div className="genres__title-rectangle"></div>
            <a href="" className="genres__title-text">
              <h3>Popular Genres </h3>
            </a>
          </div>
          <div className="genres__grid">
            <div className="genres__grid-romance genres__grid_item">
              <img src="images/genres/romance.png" alt="" />
              <p className="genres__grid_text">Romance</p>
            </div>
            <div className="genres__grid-drama genres__grid_item">
              <img src="images/genres/drama.png" alt="" />
              <p className="genres__grid_text">Drama</p>
            </div>
            <div className="genres__grid-history genres__grid_item">
              <img src="images/genres/history.png" alt="" />
              <p className="genres__grid_text">History</p>
            </div>
            <div className="genres__grid-action genres__grid_item">
              <img src="images/genres/action.png" alt="" />
              <p className="genres__grid_text">Action</p>
            </div>
            <div className="genres__grid-skifi genres__grid_item">
              <img src="images/genres/sci-fi.png" alt="" />
              <p className="genres__grid_text">Ski-fi</p>
            </div>
            <div className="genres__grid-horror genres__grid_item">
              <img src="images/genres/horror.png" alt="" />
              <p className="genres__grid_text">Horror</p>
            </div>
            <div className="genres__grid-comedy genres__grid_item">
              <img src="images/genres/comedy.png" alt="" />
              <p className="genres__grid_text">Comedy</p>
            </div>
            <div className="genres__grid-documentary genres__grid_item">
              <img src="images/genres/documentary.png" alt="" />
              <p className="genres__grid_text">Documentary</p>
            </div>
          </div>
        </section>
        <section className="channals">
          <div className="channals__title">
            <div className="channals__title-rectangle"></div>
            <a href="" className="channals__title-text">
              <h3>Trending TV channals </h3>
            </a>
          </div>
          <div className="channals__grid">
            <div className="channals__item"></div>
            <div className="channals__item"></div>
            <div className="channals__item"></div>
            <div className="channals__item"></div>
            <div className="channals__item"></div>
          </div>
        </section>
        <section className="actors">
          <div className="actors__title">
            <div className="actors__title-rectangle"></div>
            <a href="" className="actors__title-text">
              <h3>Popular Actors & Directors </h3>
            </a>
          </div>
          <div className="actors__grid">
            <div className="actors__grid-item">
              <img
                src="images/actors/1.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">Samantha Bowen</p>
            </div>
            <div className="actors__grid-item">
              <img
                src="images/actors/2.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">Rhys Birch</p>
            </div>
            <div className="actors__grid-item">
              <img
                src="images/actors/3.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">James Holloway</p>
            </div>
            <div className="actors__grid-item">
              <img
                src="images/actors/4.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">Joshua Walton</p>
            </div>
            <div className="actors__grid-item">
              <img
                src="images/actors/5.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">Patrick Elliott</p>
            </div>
            <div className="actors__grid-item">
              <img
                src="images/actors/6.png"
                alt=""
                className="actors__grid-item"
              />
              <p className="actors__text">Morgan O'Neill</p>
            </div>
          </div>
        </section>
        <div className="soon">
          <div className="soon__grid">
            <div className="soon__banny">
              <img src="images/soon/bgd-1.png" alt="" className="soon__banny" />
            </div>
            <div className="soon__coming">
              <img
                src="images/soon/2021.png"
                alt=""
                className="soon__coming_img"
              />
              <p className="soon__coming_text">Coming Soon...</p>
            </div>
          </div>
        </div>
        <div className="register">
          <div className="register__grid">
            <p className="register__text">
              Are You New Here ?<br />
              Don’t wait, Register Now.
            </p>
            <button className="register__button">Register Now</button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__logo">
          <a href="" className="footer__logo_link">
            <img src="images/logo.png" alt="" className="footer__logo_img" />
            <p className="footer__logo_text">box</p>
          </a>
          <div className="footer__social">
            <a href="" className="footer__social_icons">
              <img
                src="images/social/face.png"
                alt=""
                className="footer__social_icons"
              />
            </a>
            <a href="" className="footer__social_icons">
              <img
                src="images/social/insta.png"
                alt=""
                className="footer__social_icons"
              />
            </a>
            <a href="" className="footer__social_icons">
              <img
                src="images/social/in.png"
                alt=""
                className="footer__social_icons"
              />
            </a>
            <a href="" className="footer__social_icons">
              <img
                src="images/social/twit.png"
                alt=""
                className="footer__social_icons"
              />
            </a>
          </div>
        </div>
        <p className="footer__text">
          Voice over and Subtitle <br />
          Media Center <br />
          Privacy <br />
          Contact us
        </p>
        <p className="footer__text">
          Voice Description <br />
          Investor Relations <br />
          Legal Provisions
        </p>
        <p className="footer__text">
          Help Center <br />
          Job Opportunities <br />
          Cookies Preferences
        </p>
        <p className="footer__text">
          Gift Cards <br />
          Terms of Use <br />
          Corporate Informations
        </p>
      </footer>
    </div>
  );
}

export default App;
