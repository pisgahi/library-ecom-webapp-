import React from "react";
import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>America's Most Awarded Library Platform</h1>
              <h2>
                Find the best books with <span className="purple">Library</span>
              </h2>
              <Link to="#features">
                <button className="btn">Browse Books</button>
              </Link>
            </div>
            <figure className="header__img--wrapper">
              <img src={UndrawBooks} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Landing;
