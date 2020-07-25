import React from "react";
import { NavLink } from "react-router-dom";

import { gsap, ScrollToPlugin, Power1 } from "gsap/all";

import PageTransition from "../components/PageTransition";

import heroPhoto from "../images/f4.jpg";
import photo1 from "../images/f1.jpg";
import photo2 from "../images/f5.jpg";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const scrollToTop = () => {
    gsap.to(window, 0.8, { scrollTo: 0, ease: Power1.easeInOut });
  };

  return (
    <>
      <PageTransition />
      <main className="home-main">
        <div className="hero-wrapper">
          <img src={heroPhoto} alt="hero" className="hero" />
        </div>
        <section className="short-about">
          <article className="sa-content sa-content-1">
            <h3 className="sa-header sa-header-1">
              Dwóch <span>pasjonatów...</span>
            </h3>
            <p className="sa-text sa-text-1">
              z nieziemskim zamiłowaniem do fotografii i chęcią zapisania
              Waszych wspomnień.
            </p>
          </article>
          <article className="sa-content sa-content-2">
            <h3 className="sa-header sa-header-2">
              Dwa <span>charaktery...</span>
            </h3>
            <p className="sa-text sa-text-2">
              z różnymi pomysłami na uwiecznienie najważnieszych dla Was chwil.
            </p>
          </article>
          <article className="sa-content sa-content-3">
            <h3 className="sa-header sa-header-3">
              Jeden <span>duet...</span>
            </h3>
            <p className="sa-text sa-text-3">
              którego celem jest stworzenie dla Was najpiękniejszego reportażu z
              niepowracalnych dni.
            </p>
          </article>
        </section>
        <div className="h-photo-wrapper h-photo-wrapper-1">
          <img src={photo1} alt="home" className="h-photo h-photo-1" />
        </div>
        <div className="h-nav">
          <div className="h-nav-portfolio">
            <NavLink to="/portfolio">przejdź do portfolio</NavLink>
          </div>
          <button className="h-nav-scroll" onClick={scrollToTop}>
            przewiń do góry
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
